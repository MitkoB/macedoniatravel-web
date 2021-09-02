import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../repository/authRepository'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthService.isLoggedIn()
            ? <Component {...props} {...rest} />
            : <Redirect to="/login"/>
    )} />
);
export default PrivateRoute;