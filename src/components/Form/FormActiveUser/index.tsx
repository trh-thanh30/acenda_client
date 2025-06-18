/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCode, AiOutlineIdcard } from "react-icons/ai";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Components
import InputWithIcon from "@/components/Input/InputWithIcon";
import ButtonBorder from "@/components/ui/Button/ButtonBorder";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

const schema = z.object({
  id: z.string().nonempty("ID is required"),
  code: z.string().nonempty("Code is required"),
});

type FormData = z.infer<typeof schema>;
export default function FormActiveUser({
  userId,
  closeModal,
}: {
  userId: string;
  closeModal?: () => void;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (data: FormData) => {
    const { id, code } = data;
    try {
      setLoading(true);
      const res = await api.post("/auth/active", {
        id,
        code,
      });
      if (res.status === 201) {
        toast.success(res.data?.message);
        setLoading(false);
        if (closeModal) {
          closeModal();
        }
        router.push("/signin");
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      setLoading(false);
      toast.error(message);
    }
  };
  return (
    <div className="mt-2">
      <p className="text-sm text-center text-doveGray-600 font-medium">
        You have successfully signed up. Please check your email to verify your
        account.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithIcon
          label="User ID"
          id="id"
          disabled
          value={userId}
          error={errors.id}
          errorMessage={errors.id?.message}
          type="text"
          register={register}
          icon={<AiOutlineIdcard />}
        />
        <InputWithIcon
          label="Code"
          id="code"
          type="text"
          placeholder="Enter code in email"
          error={errors.code}
          errorMessage={errors.code?.message}
          register={register}
          icon={<AiOutlineCode />}
        />
        {/* Submit */}
        <div className="flex justify-end mt-5">
          <ButtonBorder
            text="Active User"
            isValid={isValid && !loading}
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
}
