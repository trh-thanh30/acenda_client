"use client";
import api from "@/lib/axios";
import { signOut } from "@/store/features/authSlice";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

export default function ModalDeleteAcc({
  close,
  userId,
}: {
  close: () => void;
  userId: string;
}) {
  const [step, setStep] = useState<number>(1);
  const dispatch = useDispatch();
  const handleDeleteAcc = async () => {
    try {
      const res = await api.delete(`/users/${userId}`);
      if (res.status === 200) {
        toast.success(res.data?.message);
        setStep(2);
        dispatch(signOut());
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to delete account");
    }
  };
  return (
    <>
      {step === 1 && (
        <div className="flex items-center justify-center flex-col">
          <span className="text-primary-500 mt-2 text-6xl">
            <IoIosCloseCircleOutline />
          </span>
          <h2 className="text-2xl text-midnightBlue-950 font-semibold mt-5">
            Confirm account deletion?
          </h2>
          <p className="text-sm mt-1 text-doveGray-500 text-center">
            Are you sure you want to delete your account? This action cannot be
            reversed.
          </p>
          <div className="flex items-center gap-6 mt-5">
            <button
              onClick={close}
              className="text-primary-500 text-sm border border-primary-500 bg-primary-50 py-2 px-6 rounded-md hover:cursor-pointer hover:opacity-90">
              Cancel
            </button>
            <button
              onClick={handleDeleteAcc}
              className="text-doveGray-0 text-sm border bg-primary-500  py-2 px-6 rounded-md hover:cursor-pointer hover:opacity-90">
              Confirm
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex items-center justify-center flex-col">
          <span className="text-primary-500 mt-2 text-6xl">
            <RiDeleteBin2Line />
          </span>
          <h2 className="text-2xl text-midnightBlue-950 font-semibold mt-5">
            Account deleted successfully
          </h2>
          <p className="text-sm mt-1 text-doveGray-500 text-center">
            Your account has been deleted
          </p>

          <Link
            href="/"
            className="text-doveGray-0 mt-4 text-sm border bg-primary-500  py-2 px-6 rounded-md hover:cursor-pointer hover:opacity-90">
            Back to home page
          </Link>
        </div>
      )}
    </>
  );
}
