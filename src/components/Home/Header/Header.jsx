import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/default.jpg';
import { MENU_ITEMS } from '../../../constants/paths';

import Button from '../Button/Button';

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <nav className={styles.navbar_item}>
      <h1 className={styles.navbar_logo}>
        <img src={logo} alt="logo" />
      </h1>
      <div className={styles.menu_icon} onClick={() => setClick(!click)}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul
        className={
          click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`
        }
      >
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <a className={styles[item.cName]} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
        <Link to="/signin">
          <Button>Sign In</Button>
        </Link>
        {/*<a className={styles.nav_user}>
          <img src={avatar} className={styles.nav_user_img} />
          <span>Hoa</span>
        </a>*/}
      </ul>
    </nav>
  );
};

export default Header;
