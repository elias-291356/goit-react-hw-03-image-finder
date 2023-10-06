import style from '../../Style.module.css'

export const ImageGalleryItem = ({ post, onOpenModal }) => {
  return (
    <li className={style.ImageGalleryItem}
      onClick={() => onOpenModal(post.largeImageURL)}>
      <img src={post.webformatURL}
        alt={post.tags}
        className={style.imagesSize} />
    </li >
  );
};