
export const ImageGalleryItem = ({ post }) => {


  return (
    <li className="gallery-item">
      <img src={post.webformatURL} alt={post.tags} />
    </li>
  );
};