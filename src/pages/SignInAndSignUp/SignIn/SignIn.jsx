import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// actions
import { signInWithEmailAndPassword } from '../../../redux/auth/auth.thunks';

// components
import Button from '../../../components/Home/Button/Button';
import { FormHeader, FormInput, AlternativeSign } from '../Base/Base';

// styles
import styles from '../Base/Base.module.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(signInWithEmailAndPassword(email, password, history));
  };

  return (
    <div className={`${styles.wrapper} ${styles.signInBg}`}>
      <div className={styles.signForm}>
        <FormHeader title="Sign in" />
        {error ? (
          <div className={styles.messageContainer}>
            <p className={styles.messageError}>Invalid username or password!</p>
          </div>
        ) : (
          ''
        )}
        <form onSubmit={submit}>
          <div className={styles.elementForm}>
            <FormInput
              description="Email"
              type="email"
              handleChange={handleEmail}
              required
            />
            <FormInput
              description="Password"
              type="password"
              handleChange={handlePassword}
              required
            />
            <Button type="submit">Sign In</Button>
          </div>
        </form>
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
