import Image from 'next/image';
import styled from 'styled-components';

export const PosterContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const PosterImage = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;
