import React from 'react';
import { PageNavLink } from '../PageNavLink';
import classes from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left_wrapper}>
        <div className={classes.header_logo}></div>

        <nav className={classes.nav}>
          <ul className={classes.nav_list}>
            <li className={classes.nav_item}>
              <PageNavLink to="/" label="home" />
            </li>
            <li className={classes.nav_item}>
              <PageNavLink to="phones" label="phones" />
            </li>
            <li className={classes.nav_item}>
              <PageNavLink to="tablets" label="tablets" />
            </li>
            <li className={classes.nav_item}>
              <PageNavLink to="accessories" label="accessories" />
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
