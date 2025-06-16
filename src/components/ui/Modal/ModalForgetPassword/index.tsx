import FormChangePassword from "@/components/Form/FormChangePassword";
import FormEmailSignUp from "@/components/Form/FormEmailSignUp";
import React, { useState } from "react";

export default function ModalForgetPassword() {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <p className="text-sm text-center text-doveGray-500 mt-1">
        Don&lsquo;t worry we will help you recover your account.
      </p>
      <div className="mt-4">
        {step === 1 && (
          <FormEmailSignUp setStep={setStep} setEmail={setEmail} />
        )}

        {step === 2 && <FormChangePassword userId={email} />}
      </div>
    </>
  );
}
