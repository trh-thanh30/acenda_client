import Image from "next/image";
import imgHouse from "../../../../public/img.jpg";

import Link from "next/link";
import FormSignIn from "@/components/Form/FormSignIn";
import Logo from "@/components/Logo";

export default function Page() {
  return (
    <>
      <div key="form" className="flex flex-col p-10 mb-5">
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
          <p className="text-sm whitespace-nowrap mt-4 text-center py-1 ">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className=" hover:underline hover:cursor-pointer font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      <div key="image" className="">
        <Image
          src={imgHouse}
          alt="view"
          loading="lazy"
          // width={500}

          className="object-cover w-full"></Image>
      </div>
    </>
  );
}
