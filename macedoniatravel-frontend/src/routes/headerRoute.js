import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../repository/authRepository'
import Header from "../components/Header/header";
import HeaderLoggedOut from "../components/Header/headerLoggedOut";

const HeaderRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthService.isLoggedIn()
            ? <Header />
            : <HeaderLoggedOut />
    )} />
);
export default HeaderRoute;