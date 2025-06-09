import { useState } from "react";

export default function useShowPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  return { showPassword, handleShowPassword };
}
