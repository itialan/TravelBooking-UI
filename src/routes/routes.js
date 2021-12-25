import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomeRoute from './HomeRoute';
import SignInRoute from './SignInRoute';
import SignUpRoute from './SignUpRoute';

const Routes = () => {
	return (
		<BrowserRouter>
			<HomeRoute />
			<SignInRoute />
			<SignUpRoute />
		</BrowserRouter>
	);
};

export default Routes;
