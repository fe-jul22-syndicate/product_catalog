import React from 'react';
import classes from './Footer.module.scss';
import logo from '../../images/Nice Gadgets.png';

export const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <div className="container">
        <div className="grid">
          <div
            className={`${classes.footer__section} grid__item--1-2
                grid__item--table--1-3 grid__item--desktop--1-6`}
          >
            <a href="#" className={`${classes.logo}`}>
              <img
                className={`${classes.logo__img}`}
                src={logo}
                alt="nice gadgets"
              />
            </a>
          </div>

          <div
            className={`${classes.footer__section} grid__item--1-2
                grid__item--table--4-9 grid__item--desktop--7-18`}
          >
            <div className={`${classes.footer__contacts}`}>
              <ul className={`${classes.footer__list}`}>
                <li className={`${classes.footer__list_item}`}>
                  <a href="#" className={`${classes.footer__list_link}`}>
                    Github
                  </a>
                </li>
                <li className={`${classes.footer__list_item}`}>
                  <a href="#" className={`${classes.footer__list_link}`}>
                    Contacts
                  </a>
                </li>
                <li className={`${classes.footer__list_item}`}>
                  <a href="#" className={`${classes.footer__list_link}`}>
                    rights
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`${classes.footer__section} grid__item--1-4
                grid__item--table--10-12 grid__item--desktop--19-24`}
          >
            <div className={`${classes.up}`}>
              <div className={`${classes.up__text}`}>Back to top</div>
              <a href="#" className={`${classes.up__button}`}></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
