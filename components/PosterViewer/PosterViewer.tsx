import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import Modal from "../Modal/Modal";
import useModal from "@/hooks/useModal";

interface PosterViewerTypes {}

const PosterViewer = (props: PosterViewerTypes) => {
  const { isOpen, setIsOpen } = useModal();
  const currentPoster = useSelector(
    (state: RootState) => state.shopify.currentPoster
  );

  useEffect(() => {
    setIsOpen(!!currentPoster?.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPoster])

  return <Modal isOpen={isOpen} setIsOpen={setIsOpen}><p>{currentPoster?.name}</p></Modal>;
};

export default PosterViewer;
