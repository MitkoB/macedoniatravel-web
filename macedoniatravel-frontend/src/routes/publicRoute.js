import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../repository/authRepository'

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={(props) => (
            AuthService.isLoggedIn() && restricted ?
                <Redirect to="/dashboard" />
                : <Component {...props} {...rest} />
        )} />
    );
};

export default PublicRoute;