'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/podium.jpg',
      alt: 'On the podium after a mountain bike race',
      caption: 'Celebrating a podium finish 3rd at the famous Roc d\'Azur',
    },
    {
      src: '/levens.JPG',
      alt: 'Racing in Levens',
      caption: 'Competing in the mountain bike world cup in Levens with some clean conditions ahah',
    },
    {
      src: '/marseille.JPG',
      alt: 'Racing in Marseille',
      caption: 'Pushing limits at the Marseille World cup',
    },
    {
      src: '/transmo.JPG',
      alt: 'Racing in the Transmaurienne',
      caption: 'On the start line for the Transmaurienne Race in the french Alps',
    },
    {
      src: '/ploeuc.jpg',
      alt: 'Racing in the World Cup',
      caption: 'French championship in Ploeuc',
    },
    {
      src: '/gueret.jpg',
      alt: 'Racing in the World Cup',
      caption: 'World cup in Gueret',
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