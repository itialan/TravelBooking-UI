import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../../redux/auth/auth.thunks';

// components
import Button from '../Button/Button';

// styles
import styles from './Header.module.scss';

// images
import logo from '../../../assets/images/logo.png';

// paths
import { MENU_ITEMS, URL } from '../../../constants/paths';

const Header = () => {
  const [click, setClick] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

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
        {currentUser ? (
          <li>
            <a className={styles.nav_user}>
              <img
                src={`${URL.HOST}/img/users/${currentUser.photo}`}
                className={styles.nav_user_img}
              />
              <span>{currentUser.name}</span>
              <ul className={styles.dropdown}>
                <li onClick={handleSignOut}>
                  <i className="fas fa-sign-out-alt"></i> Sign out
                </li>
              </ul>
            </a>
          </li>
        ) : (
          <Link to="/signin">
            <Button>Sign In</Button>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Header;
