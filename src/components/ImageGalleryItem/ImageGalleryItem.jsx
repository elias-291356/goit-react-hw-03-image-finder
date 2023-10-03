import React from 'react';




export const ImageGalleryItem = ({ articles }) => {
  return (
    <ul className="gallery-list">
      {articles.map((article, id) => (
        <li key={id} className="gallery-item">
          <img src={article.url} alt={article.title} />
        </li>
      ))}
    </ul>
  );
};