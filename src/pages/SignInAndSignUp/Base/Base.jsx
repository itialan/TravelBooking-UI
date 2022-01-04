import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Base.module.scss';

export const FormHeader = ({ title }) => (
  <h2 className={styles.headerTitle}>{title}</h2>
);

export const FormInput = ({ description, type }) => (
  <div className={styles.row}>
    <label>{description}</label>
    <input type={type} />
  </div>
);

export const AlternativeSign = ({ description, url, content }) => (
  <div className={styles.alternativeSign}>
    <label>{description}</label>
    <Link className={styles.signLink} to={url}>
      {content}
    </Link>
  </div>
);
