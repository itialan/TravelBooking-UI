import React from 'react';

import styles from './DestinationSingle.module.scss';

import tourImage from '../../../assets/images/hero-img.jpg';

const DestinationSingle = () => (
  <div className={styles.wrapper}>
    <div className={styles.single_destination}>
      <div className={styles.thump}>
        <img src={tourImage} alt="destination image" />
      </div>
      <div className={styles.content}>
        <p>
          Italy <a href="travel_destination.html"> 07 Places</a>
        </p>
      </div>
    </div>
  </div>
);

export default DestinationSingle;
