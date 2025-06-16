import Link from "next/link";
import React from "react";

export default function PolicyAuth() {
  return (
    <p className="text-sm text-center text-doveGray-500 md:mt-5 mt-3">
      By continuing, I agree to Acenda{" "}
      <Link
        href="https://policies.google.com/privacy"
        className="font-medium underline cursor-pointer hover:text-doveGray-900">
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link
        href="https://policies.google.com/terms"
        className="font-medium underline cursor-pointer hover:text-doveGray-900">
        Terms of Use
      </Link>
      .
    </p>
  );
}
