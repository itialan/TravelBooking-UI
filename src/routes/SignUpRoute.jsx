import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PATH } from '../constants/paths';

import SignUp from '../pages/SignUp/SignUp';

const SignUpRoute = () => {
	return (
		<Switch>
			<Route path={PATH.SIGNUP} component={SignUp} />
		</Switch>
	);
};

export default SignUpRoute;
