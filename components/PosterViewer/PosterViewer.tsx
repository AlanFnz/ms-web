import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import Modal from '../Modal/Modal';
import useModal from '@/hooks/useModal';

import { PosterContainer, PosterImage } from './styledComponents';

interface PosterViewerTypes {}

const PosterViewer = (props: PosterViewerTypes) => {
  const { isOpen, setIsOpen } = useModal();
  const currentPoster = useSelector(
    (state: RootState) => state.shopify.currentPoster
  );
  const { title, images } = currentPoster
    ? currentPoster
    : { title: '', images: [{ src: '' }] };

  useEffect(() => {
    setIsOpen(!!currentPoster?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPoster]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <PosterContainer>
        <PosterImage alt={title} src={images[0].src} width={100} height={100} />
      </PosterContainer>
    </Modal>
  );
};

export default PosterViewer;
