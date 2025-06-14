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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
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
      <div className="mt-8">
        <PolicyAuth />
        <div className="flex items-center gap-4  justify-center w-full mt-4">
          <ButtonBorder text="Sign In" isValid={true} />
        </div>
      </div>
    </form>
  );
}
