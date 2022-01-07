import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Base.module.scss';

export const FormHeader = ({ title }) => (
  <h2 className={styles.headerTitle}>{title}</h2>
);

export const FormInput = ({ description, type, handleChange, required }) => (
  <div className={styles.row}>
    <label>{description}</label>
    <input type={type} onChange={handleChange} required={required} />
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
