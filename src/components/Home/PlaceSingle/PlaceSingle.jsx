import React from 'react';

import styles from './PlaceSingle.module.scss';

import tourPhoto from '../../../assets/images/hero-img.jpg';

const PlaceSingle = () => (
  <div className={styles.wrapper}>
    <div className={styles.single_place}>
      <div className={styles.thump}>
        <img src={tourPhoto} />
        <a href="#" className={styles.prise}>
          $500
        </a>
      </div>
      <div className={styles.place_info}>
        <a href="destination_details.html">
          <h3>California</h3>
        </a>
        <p>United State of America</p>
        <div className={styles.rating_days}>
          <span className={styles.star_wrapper}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <a href="#">(20 Review)</a>
          </span>
          <div className={styles.days}>
            <i className="fa fa-clock"></i>
            <a href="#">5 Days</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PlaceSingle;
