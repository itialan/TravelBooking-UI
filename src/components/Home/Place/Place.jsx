import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlaceSingle from '../PlaceSingle/PlaceSingle';

import { fetchTourList } from '../../../redux/tour/tour.thunks';

import styles from './Place.module.scss';

const Place = () => {
  const tours = useSelector((state) => state.tour.tours);
  const dispatch = useDispatch();
  console.log(tours);

  useEffect(() => {
    dispatch(fetchTourList());
  }, [dispatch]);

  return (
    <div className={styles.popular_places_area}>
      <div className={styles.container}>
        <div className={styles.row__justify_content_center}>
          <div className={styles.col_lg_6}>
            <div className={styles.popular_places_area_title}>
              <h3>Popular Places</h3>
              <p>
                Suffered alteration in some form, by injected humour or good day
                randomised booth anim 8-bit hella wolf moon beard words.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          {tours.map(({ id, ...otherSectionProps }) => (
            <PlaceSingle key={id} {...otherSectionProps} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Place;
