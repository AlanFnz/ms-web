import React, { ReactNode } from "react";
import { ModalBox, ModalOverlay } from "./styledComponents";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: ModalType) => {
  return props.isOpen ? (
    <>
      <ModalOverlay>
        <ModalBox>{props.children}</ModalBox>
      </ModalOverlay>
    </>
  ) : null;
};

export default Modal;
