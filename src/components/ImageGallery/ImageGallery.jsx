import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import style from './componets/Style.Module.css'

export const ImageGallery = ({ posts }) => {
  if (!Array.isArray(posts)) {
    return null;
  }
  return (
    <div>
      <ul className="gallery">
        {posts.map((post) => (
          <ImageGalleryItem
            key={post.id}
            post={post} />
        ))}
      </ul>
    </div>
  );
};