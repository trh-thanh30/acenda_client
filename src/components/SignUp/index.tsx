"use client";
import React, { useState } from "react";
// Components
import FormEmailSignUp from "../Form/FormEmailSignUp";
import FormSignUp from "../Form/FormSignUp";
import FormActiveUser from "../Form/FormActiveUser";

export default function SignUp() {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  console.log(userId);
  return (
    <>
      {step === 1 && <FormEmailSignUp setStep={setStep} setEmail={setEmail} />}

      {step === 2 && (
        <FormSignUp setStep={setStep} email={email} setUserId={setUserId} />
      )}
      {step === 3 && <FormActiveUser userId={userId} />}
    </>
  );
}
