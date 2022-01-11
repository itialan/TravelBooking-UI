import React from 'react';

// styles
import styles from './DestinationSingle.module.scss';

// images
import tourImage from '../../../assets/images/hero-img.jpg';

const DestinationSingle = ({ destination }) => (
  <div className={styles.wrapper}>
    <div className={styles.single_destination}>
      <div className={styles.thump}>
        <img src={tourImage} alt="destination" />
      </div>
      <div className={styles.content}>
        <p>
          {destination} <a href="#"> 07 Places</a>
        </p>
      </div>
    </div>
  </div>
);

export default DestinationSingle;
