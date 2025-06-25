import Modal from "@/components/ui/Modal";
import ModalForgetPassword from "@/components/ui/Modal/ModalForgetPassword";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function ChangePassword() {
  const [openForgetPasswordModal, setOpenForgetPasswordModal] = useState(false);
  return (
    <>
      <div className="p-5">
        <h2 className="md:text-2xl text-xl text-midnightBlue-950 font-semibold mb-4">
          Change Password
        </h2>
        <div className="flex items-center justify-center mt-24">
          <button
            className="border md:text-base text-xs border-primary-500 rounded-full py-2 px-8 outline-none text-primary-500 hover:bg-primary-500 hover:text-white transition-all group cursor-pointer"
            onClick={() => setOpenForgetPasswordModal(true)}>
            <span className="flex items-center gap-2 group">
              Change Password
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
      {/* Modal forget password */}
      <Modal
        isOpen={openForgetPasswordModal}
        close={() => setOpenForgetPasswordModal(false)}
        titleModal="Forgot password?">
        <ModalForgetPassword close={() => setOpenForgetPasswordModal(false)} />
      </Modal>
    </>
  );
}
