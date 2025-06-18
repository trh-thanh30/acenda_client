import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Logo from "@/components/Logo";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen?: boolean;
  close: () => void;
  children?: React.ReactNode;
  titleModal: string;
}
export default function Modal({
  isOpen,
  close,
  children,
  titleModal,
}: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30 backdrop-blur-sm">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-doveGray-0 p-6 backdrop-blur-2xl duration-200 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
            <div
              onClick={close}
              className="flex items-center justify-end hover:opacity-90 hover:cursor-pointer">
              <AiOutlineClose size={20} />
            </div>
            <div className="flex items-center justify-center">
              <Logo />
            </div>

            <DialogTitle
              as="h3"
              className="text-2xl mt-6 font-medium text-midnightBlue-950 text-center">
              {titleModal}
            </DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
