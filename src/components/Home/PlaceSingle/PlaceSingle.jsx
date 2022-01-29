import React from 'react';

// helpers
import { handlePrice } from '../../../helpers/string';

// styles
import styles from './PlaceSingle.module.scss';

// paths
import { URL } from '../../../constants/paths';

const PlaceSingle = ({
  id,
  name,
  price,
  ratingsAverage,
  ratingsQuantity,
  duration,
  imageCover,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.single_place}>
      <div className={styles.thump}>
        <img src={`${URL.HOST}/img/tours/${imageCover}`} alt={imageCover} />
        <a href={`/tour/${id}`} className={styles.prise}>
          {handlePrice(price)}
        </a>
      </div>
      <div className={styles.place_info}>
        <a href={`/tour/${id}`}>
          <h3>{name}</h3>
        </a>
        <p>Việt Nam</p>
        <div className={styles.rating_days}>
          <span className={styles.star_wrapper}>
            {[1, 2, 3, 4, 5].map((rate, index) =>
              ratingsAverage >= rate ? (
                <i key={index} className='fa fa-star'></i>
              ) : (
                ''
              )
            )}
            <a href={`/tour/${id}`}>({ratingsQuantity} Review)</a>
          </span>
          <div className={styles.days}>
            <i className='fa fa-clock'></i>
            {duration} Days
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PlaceSingle;
