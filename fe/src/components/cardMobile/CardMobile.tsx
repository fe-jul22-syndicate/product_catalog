import React from 'react';
import classes from './CardMobile.module.scss';
import imgs from './imgs/iPhone-1.png';
import icon from './imgs/like-icon.svg';

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

      <p className={classes.card__middleLine}></p>

      <div className={classes.card__params}>
        <div className={classes.card__paramsItem}>
          <span>Screen</span>
          <span className={classes.card__paramValue}>5.8” OLED</span>
        </div>
        <div className={classes.card__paramsItem}>
          <span>Capacity</span>
          <span className={classes.card__paramValue}>64 GB</span>
        </div>
        <div className={classes.card__lastItem}>
          <span>RAM</span>
          <span className={classes.card__paramValue}>4 GB</span>
        </div>
      </div>

      <div className={classes.btns}>
        <a className={classes.card__btn}> Add to cart </a>
        <div className={classes.card__btnFavourite}>
          <img src={icon} alt="iPhone" className={classes.card__likeIcon} />
        </div>
      </div>
    </div>
  </div>
);
