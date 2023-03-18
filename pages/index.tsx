import React, { useEffect } from 'react';
import { Product } from 'shopify-buy';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosters, setCurrentPoster } from '../state/slices/shopify';
import { AppDispatch, RootState } from '../state/store';

import Poster from '../components/Poster/Poster';

const MainContainer = styled.div`
  width: 100%;
  padding: 30px 5vw;
`;

export function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const posters = useSelector((state: RootState) => state.shopify.posters);

  useEffect(() => {
    dispatch(fetchPosters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setPoster = (poster: Product) => {
    dispatch(setCurrentPoster(poster));
  };

  return (
    <MainContainer>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={'6px'}>
          {posters.map((poster) => (
            <Poster
              key={poster.id}
              title={poster.title}
              src={poster.images[0].src}
              setPoster={() => setPoster(poster)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </MainContainer>
  );
}

export default Index;
