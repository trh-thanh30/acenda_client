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
import { useDispatch } from "react-redux";
import api from "@/lib/axios";
import { setCredentials } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ModalActiveAccount from "@/components/ui/Modal/ModalActiveAccount";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [isActiveOpen, setIsActiveOpen] = useState<boolean>(false);
  const [openForgetPasswordModal, setOpenForgetPasswordModal] =
    useState<boolean>(false);
  const [openActiveModal, setOpenActiveModal] = useState<boolean>(false);
  const { handleShowPassword, showPassword } = useShowPassword();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    setLoading(true);
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      const { access_token, user } = res.data;
      dispatch(setCredentials({ accessToken: access_token, user }));
      if (res.status === 201) {
        toast.success(res.data?.message);
        router.push("/");
        setLoading(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message);
      setIsActiveOpen(false);
      setLoading(false);
      if (error.response.data.message === "Account is not active") {
        setIsActiveOpen(true);
      }
    }
  };

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
              <ButtonBorder loading={loading} text="Sign In" isValid={true} />
            </div>
          </form>

          {/* Forget password */}
          <button
            onClick={() => setOpenForgetPasswordModal(true)}
            className="text-sm whitespace-nowrap mt-2 text-center hover:underline py-1 hover:cursor-pointer">
            Forget your password
          </button>
          {/* Modal forget password */}
          <Modal
            isOpen={openForgetPasswordModal}
            close={() => setOpenForgetPasswordModal(false)}
            titleModal="Forgot password?">
            <ModalForgetPassword />
          </Modal>

          {/* Active Account */}
          {isActiveOpen && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpenActiveModal(true)}
                className="text-sm whitespace-nowrap mt-2 text-center w-fit text-primary-500 bg-primary-50 px-4 py-2 hover:cursor-pointer">
                Active your account
              </button>
            </div>
          )}
          {/* Modal active account */}
          <Modal
            isOpen={openActiveModal}
            close={() => setOpenActiveModal(false)}
            titleModal="Active your account">
            <ModalActiveAccount />
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
