import React from 'react';

import styles from './PlaceSingle.module.scss';

import tourPhoto from '../../../assets/images/hero-img.jpg';

import { handlePrice } from '../../../helpers/string';

const PlaceSingle = ({
  name,
  price,
  ratingsAverage,
  ratingsQuantity,
  duration,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.single_place}>
      <div className={styles.thump}>
        <img src={tourPhoto} />
        <a href="#" className={styles.prise}>
          {handlePrice(price)}
        </a>
      </div>
      <div className={styles.place_info}>
        <a href="destination_details.html">
          <h3>{name}</h3>
        </a>
        <p>Việt Nam</p>
        <div className={styles.rating_days}>
          <span className={styles.star_wrapper}>
            {[1, 2, 3, 4, 5].map((rate) =>
              ratingsAverage >= rate ? <i className="fa fa-star"></i> : ''
            )}
            <a href="#">({ratingsQuantity} Review)</a>
          </span>
          <div className={styles.days}>
            <i className="fa fa-clock"></i>
            <a href="#">{duration} Days</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PlaceSingle;
