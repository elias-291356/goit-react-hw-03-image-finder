import style from '../../Style.module.css'

export const ImageGalleryItem = ({ post }) => {


  return (
    <li className={style.ImageGalleryItem}>
      <img src={post.webformatURL} alt={post.tags} />


    </li>
  );
};