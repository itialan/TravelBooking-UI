import React from 'react';

import DestinationSingle from '../DestinationSingle/DestinationSingle';

import styles from './Destination.module.scss';

const Destination = () => (
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
        <DestinationSingle />
        <DestinationSingle />
        <DestinationSingle />
        <DestinationSingle />
      </div>
    </div>
  </div>
);

export default Destination;
