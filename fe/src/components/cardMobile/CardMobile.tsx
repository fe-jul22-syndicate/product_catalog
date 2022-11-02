import React from 'react';
import classes from './CardMobile.module.scss';
import imgs from './imgs/banner-123.png';

export const CardMobile: React.FC = () => (
  <div className={classes.card}>
    <div className={classes.card__content}>
      <div className={classes.card__img}>
        <img src={imgs} alt="iPhone" className={classes.card__imgProduct} />
      </div>
      <h2 className={classes.card__title}>
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h2>
      <p className={classes.card__price}>
        <span className={classes.card__priceTeg}>$799</span>
        <s className={classes.card__priceTegSale}>$899</s>
      </p>
      <div className={classes.pusto}></div>
      <div className={classes.btns}>
        <a className={classes.card__btn}> Add to cart </a>
        <a className={classes.card__btnFavourite}>0</a>
      </div>
    </div>
  </div>
);
