import React, { ReactNode } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import { ModalBox, ModalOverlay } from './styledComponents';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeAction: () => void;
}

const Modal = (props: ModalType) => {
  const { isOpen, closeAction, children } = props;
  return isOpen ? (
    <>
      <ModalOverlay>
        <ModalBox>
          <CloseButton isModal={true} closeAction={closeAction} />
          {children}
        </ModalBox>
      </ModalOverlay>
    </>
  ) : null;
};

export default Modal;
