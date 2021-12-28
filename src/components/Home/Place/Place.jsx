import React from 'react';

import PlaceSingle from '../PlaceSingle/PlaceSingle';

import styles from './Place.module.scss';

const Place = () => (
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
        <PlaceSingle />
        <PlaceSingle />
        <PlaceSingle />
        <PlaceSingle />
      </div>
    </div>
  </div>
);

export default Place;
