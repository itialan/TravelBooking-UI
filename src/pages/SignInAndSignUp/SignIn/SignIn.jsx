import React from 'react';

import styles from '../Base/Base.module.scss';

import { FormHeader, FormInput, AlternativeSign } from '../Base/Base';
import Button from '../../../components/Home/Button/Button';

const SignIn = () => {
  return (
    <div className={`${styles.wrapper} ${styles.signInBg}`}>
      <div className={styles.signForm}>
        <FormHeader title="Sign in" />
        <div className={styles.elementForm}>
          <FormInput description="Username" type="text" />
          <FormInput description="Password" type="password" />
          <Button>Sign In</Button>
        </div>
        <AlternativeSign
          description="You don't have an account?"
          url="/signup"
          content="Sign up now"
        />
      </div>
    </div>
  );
};

export default SignIn;
