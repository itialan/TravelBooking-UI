import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logoWhite from '../../../assets/images/logo-white.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav__tours}>
        <Link className={styles.alltours} to="#">
          All Tour
        </Link>
      </nav>
      <div className={styles.header__logo}>
        <img src={logoWhite} alt="NQH logo" />
      </div>
      <nav className={styles.nav__sign}>
        <Link className={styles.nav__el} to="#">
          SIGN IN
        </Link>
        <Link className={styles.nav__el} to="#">
          SIGN UP
        </Link>
      </nav>
    </header>
  );
};

export default Header;
