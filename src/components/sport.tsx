'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/podium.jpg',
      alt: 'Basketball net',
      caption: 'I have been playing basketball since young age and is my favorite sport',
    },
    {
      src: '/levens.JPEG',
      alt: 'Garfield at the tv',
      caption: 'I enjoy too much watching movies and series with people',
    },
        {
      src: '/gueret.jpg',
      alt: 'Lucha libre tournament',
      caption: 'Love watching the incredible gymanstics of the sport',
    }
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Hobbies
        </h2>
        <p className="mt-4 text-muted-foreground">
          While focusing on development, I also enjoy quuality time with my family, watching movies, going to the gym or playing basketball, reading novels or researching ways on how to code something! I love staying active and coding while listening to some tunes!
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;