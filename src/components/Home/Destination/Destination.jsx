import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { fetchDestinationList } from '../../../redux/destination/destination.thunks';

// selectors
import { routeSelector } from '../../../selectors/route.selector';

// components
import DestinationSingle from '../DestinationSingle/DestinationSingle';

// styles
import styles from './Destination.module.scss';

const Destination = () => {
  const destinations = useSelector(routeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinationList());
  }, [dispatch]);

  return (
    <div className={styles.popular_destination_area}>
      <div className={styles.container}>
        <div className={styles.row__justify_content_center}>
          <div className={styles.col_lg_6}>
            <div className={styles.popular_destination_area_title}>
              <h3>Popular Destination</h3>
              <p>
                Suffered alteration in some form, by injected humour or good day
                randomised booth anim 8-bit hella wolf moon beard words.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          {destinations
            .filter((item, index) => index < 6)
            .map(({ id, ...otherSectionProps }) => (
              <DestinationSingle key={id} {...otherSectionProps} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
