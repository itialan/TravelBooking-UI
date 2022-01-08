import React from 'react';

import styles from '../Base/Base.module.scss';

import { FormHeader, FormInput, AlternativeSign } from '../Base/Base';
import Button from '../../../components/Home/Button/Button';

const SignUp = () => {
  return (
    <div className={`${styles.wrapper} ${styles.signUpBg}`}>
      <div className={styles.signForm}>
        <FormHeader title="Sign up" />
        <div className={styles.elementForm}>
          <FormInput description="Name" type="text" />
          <FormInput description="Username" type="text" />
          <FormInput description="Password" type="password" />
          <FormInput description="Confirm password" type="password" />
          <FormInput description="Phone" type="text" />
          <FormInput description="Address" type="text" />
          <Button>Sign Up</Button>
        </div>
        <AlternativeSign
          description="You have an account already?"
          url="/signin"
          content="Sign in now"
        />
      </div>
    </div>
  );
};

export default SignUp;
