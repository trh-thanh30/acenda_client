import Link from "next/link";
import FormSignIn from "@/components/Form/FormSignIn";
import Logo from "@/components/Logo";
import ImageAuth from "@/components/ImageAuth";

export default function Page() {
  return (
    <>
      <div key="form" className="flex flex-col p-10 mb-2">
        <Logo />
        <div className="flex flex-col mt-4 border border-slate-200 rounded-md p-4">
          <h1 className="mt-2 text-4xl text-center text-slate-900 font-medium">
            Welcome back
          </h1>
          <span className="text-center mt-1 text-slate-400 text-sm">
            We’re so excited to see you again!
          </span>
          <FormSignIn />
          <p className="text-sm whitespace-nowrap mt-2 text-center hover:underline py-1 hover:cursor-pointer">
            Forget your password
          </p>
          <p className="text-sm whitespace-nowrap mt-4 text-center py-1 text-doveGray-500">
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
