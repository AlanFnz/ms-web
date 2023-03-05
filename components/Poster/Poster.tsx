import React from 'react';
import useMasonryImage from '../../hooks/useImagePosition';
import { PosterContainer, PosterImage } from './styledComponents';

interface Props {
  title: string;
  src: string;
}

const Poster = ({ title, src }: Props) => {
  const { getPaddingTop, paddingTop } = useMasonryImage();

  return (
    <PosterContainer style={{ paddingTop }} title={title}>
      <PosterImage alt={title} src={src} fill onLoad={getPaddingTop} />
    </PosterContainer>
  );
};

export default Poster;
