'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/pirata.JPG',
      alt: 'PirataFuenteStadium',
      caption: 'On top of the stadium "Pirata Fuente"',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Pirata Fuente Stadium
        </h2>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Crazy;