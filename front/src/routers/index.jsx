import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import lazyLoad from './utils/lazyLoad';

export const rootRouter = [
	{
		path: "/",
		element: lazyLoad(React.lazy(() => import("./../pages/Main"))),
		// element: <Navigate to="/login" />
	},

];

const Router = () => {
	const routes = useRoutes( rootRouter );
	return routes;
};

export default Router;
