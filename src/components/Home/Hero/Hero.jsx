import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.hero__textbox}>
      <h1>
        OUTDOORS
        <span className={styles.hero__sub}> IS WHERE LIFE HAPPENS</span>
      </h1>

      <Link to="#" className={styles.btn__full}>
        Discover our tours
      </Link>
    </div>
  </div>
);

export default Hero;
