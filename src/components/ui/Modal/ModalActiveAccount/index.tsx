import FormActiveUser from "@/components/Form/FormActiveUser";
import FormEmailSignUp from "@/components/Form/FormEmailSignUp";
import React, { useState } from "react";

export default function ModalActiveAccount() {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <p className="text-sm text-center text-doveGray-500 mt-1">
        Don&lsquo;t worry we will help you recover your account.
      </p>
      <div className="mt-4">
        {step === 1 && (
          <FormEmailSignUp
            whatCall="activeAccount"
            setStep={setStep}
            setEmail={setEmail}
          />
        )}

        {step === 2 && <FormActiveUser userId={email} />}
      </div>
    </>
  );
}
