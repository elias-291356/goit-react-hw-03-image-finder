import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import style from '../../Style.module.css'
export const Loader = ({ loading, error }) => {
  return (
    <div className={style.container} >
      {loading ? (
        <MutatingDots
          height={100}
          width={100}
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius={12.5}
          ariaLabel="mutating-dots-loading"
        />
      ) : null}
      {error ? <p className="error-txt">Error: {error}</p> : null}
    </div>
  );
};