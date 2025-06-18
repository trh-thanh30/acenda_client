import FormActiveUser from "@/components/Form/FormActiveUser";
import FormEmailSignUp from "@/components/Form/FormEmailSignUp";
import React, { useState } from "react";

interface IActiveAccount {
  emailSignIn: string;
  close?: () => void;
}
export default function ModalActiveAccount({
  emailSignIn,
  close,
}: IActiveAccount) {
  const [step, setStep] = useState<number>(1);
  const [userId, setUserId] = useState<string>("");
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
            userEmail={emailSignIn}
            setUserId={setUserId}
          />
        )}

        {step === 2 && <FormActiveUser closeModal={close} userId={userId} />}
      </div>
    </>
  );
}
