import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/state/store';
import { cleanCurrentPoster } from '@/state/slices/shopify';
import useModal from '@/hooks/useModal';

import Modal from '../Modal/Modal';
import { PosterContainer, PosterImage } from './styledComponents';
import Dropdown from '../Dropdown/Dropdown';

interface PosterViewerTypes {}

const PosterViewer = (props: PosterViewerTypes) => {
  const { isOpen, setIsOpen } = useModal();
  const dispatch = useDispatch<AppDispatch>();
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

  const closeAction = () => {
    dispatch(cleanCurrentPoster());
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeAction={closeAction}>
      <PosterContainer>
        <PosterImage
          alt={title}
          src={images[0].src}
          width={100}
          height={100}
          unoptimized={true}
        />
      </PosterContainer>
      {currentPoster?.variants && <Dropdown options={currentPoster.variants}/>}
    </Modal>
  );
};

export default PosterViewer;
