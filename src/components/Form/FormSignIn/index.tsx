"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Icon
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
// Components
import InputWithIcon from "@/components/Input/InputWithIcon";
import useShowPassword from "@/hooks/useShowPassword";
import PolicyAuth from "@/components/PolicyAuth";
import ButtonBorder from "@/components/Button/ButtonBorder";
import Logo from "@/components/Logo";
import ImageAuth from "@/components/ImageAuth";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import ModalForgetPassword from "@/components/ui/Modal/ModalForgetPassword";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

type FormData = z.infer<typeof schema>;
export default function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const { handleShowPassword, showPassword } = useShowPassword();
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <div key="form" className="flex flex-col md:p-10 p-4 mb-2">
        <Logo />
        <div className="flex flex-col md:mt-10 mt-8 border border-doveGray-200 rounded-md md:p-4 p-3">
          <h1 className="mt-2 md:text-4xl text-3xl text-center text-slate-900 font-medium">
            Welcome back
          </h1>
          <span className="text-center mt-1 text-slate-500 text-sm">
            We’re so excited to see you again!
          </span>
          <form onSubmit={handleSubmit(onSubmit)} className="md:mt-8 mt-1">
            {/* Email */}

            <InputWithIcon
              register={register}
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              icon={<AiOutlineMail />}
              error={errors.email}
              errorMessage={errors.email?.message}
            />

            {/* Password */}
            <InputWithIcon
              register={register}
              showPassword={showPassword}
              handleShowPassword={handleShowPassword}
              placeholder="Enter your password"
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              icon={<AiOutlineLock />}
              error={errors.email}
              errorMessage={errors.email?.message}
            />
            {/* Button */}

            <PolicyAuth />
            <div className="flex items-center gap-4  justify-center w-full mt-4">
              <ButtonBorder text="Sign In" isValid={true} />
            </div>
          </form>
          <button
            onClick={() => setOpenModal(true)}
            className="text-sm whitespace-nowrap mt-2 text-center hover:underline py-1 hover:cursor-pointer">
            Forget your password
          </button>
          <Modal
            isOpen={openModal}
            close={() => setOpenModal(false)}
            titleModal="Forgot password?">
            <ModalForgetPassword />
          </Modal>
          <p className="text-sm whitespace-nowrap md:mt-4 mt-2 text-center py-1 text-doveGray-500">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className=" underline hover:cursor-pointer font-medium text-doveGray-900">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      {/* Image */}
      <ImageAuth />
    </>
  );
}
