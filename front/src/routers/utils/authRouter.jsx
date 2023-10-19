import { useContext } from 'react'
import { useLocation, Navigate } from "react-router-dom";
import { rootRouter } from "./../index";
import { searchRoute } from "./searchRoute";
import { AuthContext } from './../../context'
/**
 * @description 路由守卫组件
 * */
const AuthRouter = (props) => {
	const { state } = useContext(AuthContext);
	const { pathname } = useLocation();

	const route = searchRoute(pathname, rootRouter);
	
	// * 判断当前路由是否需要访问权限(不需要权限直接放行)
	if (!route.handle?.requiresAuth) {
		return props.children;
	}
	// * 判断是否有Token
	if (!state.token) {
		return <Navigate to="/login" />
	};

	// * 当前账号有权限返回 Router，正常访问页面
	return props.children;
};

export default AuthRouter;