import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// thunks
import { fetchTourList } from '../../../redux/tour/tourList/tourList.thunks';

// components
import PlaceSingle from '../PlaceSingle/PlaceSingle';

// selectors
import { tourSelector } from '../../../selectors/tour.selector';

// styles
import styles from './Place.module.scss';

const Place = () => {
  const tours = useSelector(tourSelector);
  const dispatch = useDispatch();

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
          {tours
            .filter((item, index) => index < 6)
            .map(({ id, ...otherSectionProps }) => (
              <PlaceSingle key={id} {...otherSectionProps} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Place;
