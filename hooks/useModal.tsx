import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = (status = null) => {
    status === null ? setisOpen(!isOpen) : setisOpen(status);
  };

  return {
    isOpen,
    toggle,
  };
}
