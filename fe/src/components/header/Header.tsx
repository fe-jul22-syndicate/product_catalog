import React from 'react';
import classes from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left_wrapper}>
        <div className={classes.header_logo}></div>

        <nav className={classes.nav}>
          <ul className={classes.nav_list}>
            <li className={classes.nav_item}>
              <a href="#" className={classes.nav_link}>
                home
              </a>
            </li>
            <li className={classes.nav_item}>
              <a href="/phones" className={classes.nav_link}>
                phones
              </a>
            </li>
            <li className={classes.nav_item}>
              <a href="/tablets" className={classes.nav_link}>
                tablets
              </a>
            </li>
            <li className={classes.nav_item}>
              <a href="/accessories" className={classes.nav_link}>
                accessories
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.right_wrapper}>
        <div className={classes.right_wrapper_box}>
          <a href="#" className={classes.header_favorites}></a>
        </div>
        <div className={classes.right_wrapper_box}>
          <a href="#" className={classes.header_shopping_basket}></a>
        </div>
      </div>

      <div className={classes.header_burger}>
        <a href="#" className={classes.header_burger_menu}></a>
      </div>
    </header>
  );
};
