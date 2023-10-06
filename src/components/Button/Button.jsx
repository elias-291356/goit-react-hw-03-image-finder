import style from '../../Style.module.css'

export const Button = ({ onClickLoadMore }) => {
  return (
    <div className={style.container} >
      <button
        className={style.Button}
        onClick={onClickLoadMore}
        type="submit">
        <span>Load more</span>

      </button>
    </div>
  );
};