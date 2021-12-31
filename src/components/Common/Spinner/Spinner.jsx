import React from 'react';

import styles from './Spinner.module.scss';

const Spinner = () => (
  <div className={styles.spinner__overplay}>
    <div className={styles.spinner__container}></div>
  </div>
);

export default Spinner;
