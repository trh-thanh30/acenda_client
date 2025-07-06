import InputPrimary from "@/components/Input/InputPrimary";
import SpinnerLarge from "@/components/Loading/SpinnerLarge";
import ButtonBorder from "@/components/ui/Button/ButtonBorder";
import TextareaPrimary from "@/components/ui/Textarea";

import api from "@/lib/axios";
import { updateAvatar } from "@/store/features/authSlice";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

type UserInfo = {
  id?: string;
  avatar?: string;
  email?: string;
  gender?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
  address?: string;
  role?: string;
};
export default function InfoTab() {
  const [loadFormData, setLoadFormData] = useState<boolean>(false);
  const [loadingAvatar, setLoadingAvatar] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [infoUser, setInfoUser] = useState<UserInfo>({
    avatar: "",
  });
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadFormData(true);
    try {
      const res = await api.patch(`/users/${infoUser.id}`, {
        ...formData,
      });

      if (res.status === 200) {
        setLoadFormData(false);
        toast.success(res.data?.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as any;
      setLoadFormData(false);
      toast.error(err.response?.data?.message || "Failed to update profile");
    }
  };
  const handleUploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("avatar", file);
    setLoadingAvatar(true);
    try {
      const res = await api.patch(`/upload/avatar/${infoUser.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200) {
        toast.success(res.data?.message);
        dispatch(updateAvatar(res.data?.url));
        // Update avatar mới
        setInfoUser((prev) => ({
          ...prev,
          avatar: res.data?.url,
        }));

        // Reset input
        if (ref.current) {
          ref.current.value = "";
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to upload avatar");
    } finally {
      setLoadingAvatar(false);
    }
  };

  useEffect(() => {
    const handleFetchUserData = async () => {
      try {
        const res = await api.get("/auth/profile");
        if (res.status === 200) {
          const userData = res.data;
          setInfoUser(userData);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.response.data.message || "Failed to fetch user data");
      }
    };
    handleFetchUserData();
  }, []);

  return (
    <div className="md:p-5 p-0">
      <div className="flex items-center justify-between">
        <h2 className="md:text-2xl text-xl text-midnightBlue-950 font-semibold mb-4">
          Information
        </h2>
        <span className="p-2 bg-midnightBlue-50 text-xs font-semibold rounded-md text-midnightBlue-950">
          {infoUser?.role}
        </span>
      </div>
      <form onSubmit={onHandleUpdateProfile} className="md:space-y-6 space-y-1">
        {/* AVATAR */}
        <div className="relative flex items-center justify-center">
          {infoUser.avatar && (
            <>
              <Image
                onClick={() => ref.current?.click()}
                src={infoUser.avatar}
                width={128}
                height={128}
                alt="avatar"
                className={`md:w-32 md:h-32 w-24 h-24 rounded-full cursor-pointer transition-opacity ${
                  loadingAvatar ? "opacity-50" : "hover:opacity-80"
                }`}
              />
              {loadingAvatar && (
                <div className="absolute inset-0 flex items-center justify-center rounded-full">
                  <SpinnerLarge />
                </div>
              )}
            </>
          )}
        </div>
        <input
          name="avatar"
          onChange={handleUploadAvatar}
          type="file"
          ref={ref}
          className="hidden"
          accept="image/*"
        />
        {/* EMAIL && PHONE */}
        <div className="flex gap-2 items-center w-full md:flex-row flex-col">
          <div className="w-full">
            <InputPrimary
              name="email"
              id="email"
              disabled
              type="email"
              label="Email"
              defaultValue={infoUser?.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full">
            <InputPrimary
              name="phone_number"
              id="phone_number"
              type="tel"
              label="Phone Number"
              defaultValue={infoUser?.phone_number}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        {/* FIRST_NAME && LAST_NAME */}
        <div className="flex gap-2 items-center w-full md:flex-row flex-col">
          <div className="w-full">
            <InputPrimary
              name="first_name"
              id="first_name"
              type="text"
              label="First Name"
              defaultValue={infoUser?.first_name}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-full">
            <InputPrimary
              name="last_name"
              id="last_name"
              type="text"
              label="Last Name"
              defaultValue={infoUser?.last_name}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* GENDER && DATE_OF_BIRTH */}
        <div className="flex gap-2 items-center w-full md:flex-row flex-col">
          <div className="w-full">
            <label htmlFor="gender" className="text-sm text-midnightBlue-950">
              Gender
            </label>
            <select
              name="gender"
              defaultValue={infoUser?.gender}
              onChange={handleChange}
              id="gender"
              className="w-full  border-2 rounded-md p-3 outline-none text-xs font-medium transition-colors border-midnightBlue-100 mt-1 disabled:border-doveGray-100 disabled:bg-doveGray-100 focus:border-midnightBlue-200 focus:shadow-midnightBlue-200 focus:shadow-xs placeholder:text-doveGray-400">
              <option value="" className="text-doveGray-400" disabled hidden>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="w-full">
            <InputPrimary
              name="date_of_birth"
              id="date_of_birth"
              type="date"
              label="Date of Birth"
              onChange={handleChange}
              defaultValue={infoUser?.date_of_birth}
              placeholder="Enter your date of birth"
            />
          </div>
        </div>

        {/* ADDRESS */}
        <label
          htmlFor="address"
          className="text-sm text-midnightBlue-950 mt-5 mb-1">
          Address
        </label>
        <TextareaPrimary
          onChange={handleChange}
          id="address"
          name="address"
          placeholder="Enter your address"
          defaultValue={infoUser.address || ""}
        />
        {/* SUBMIT BUTTON */}
        <div className="flex justify-end mt-2">
          <ButtonBorder
            isValid={true}
            loading={loadFormData}
            text="Save Changes"
          />
        </div>
      </form>
    </div>
  );
}
