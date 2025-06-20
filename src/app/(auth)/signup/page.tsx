import Link from "next/link";
// Components
import Logo from "@/components/Logo";
import ImageAuth from "@/components/ImageAuth";
import SignUp from "@/components/SignUp";

export default function Page() {
  return (
    <>
      <div className="flex flex-col md:p-10 p-4 mb-2 ">
        <Logo />
        <div className="flex flex-col md:mt-10 mt-8 border border-doveGray-200 rounded-md md:p-4 p-3">
          <h1 className="mt-2 md:text-4xl text-3xl text-center text-doveGray-900 font-medium">
            Create an account
          </h1>
          <span className="text-center mt-1 text-doveGray-400 text-sm">
            Enter your email to join us or sign in.
          </span>

          <SignUp />
          {/* Link to Sign In */}
          <p className="text-sm mt-4 text-center text-doveGray-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium underline hover:cursor-pointer text-doveGray-900">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      {/* Image */}

      <ImageAuth />
    </>
  );
}
