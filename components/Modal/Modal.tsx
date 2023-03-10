import React, { ReactNode } from "react";
import { ModalBox, ModalOverlay } from "./styledComponents";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = (props: ModalType) => {
  return (
    <>
      <ModalOverlay>
        <ModalBox>{props.children}</ModalBox>
      </ModalOverlay>
    </>
  );
};

export default Modal;
