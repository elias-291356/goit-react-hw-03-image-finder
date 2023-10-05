import React, { Component } from 'react';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import style from '../../Style.module.css'

export const ImageGallery = ({ posts }) => {
  if (!Array.isArray(posts)) {
    return null;
  }
  return (
    <div>
      <ul className={style.ImageGallery}>

        {posts.map((post, id) => (
          <ImageGalleryItem key={id} post={post} />
        ))}
      </ul>
    </div>
  );
};