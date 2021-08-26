import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Header from '../Header/header'
import Register from '../Register/signUpForm'
import Login from '../Login/loginForm'
import RouteService from "../../repository/routeRepository";
import AuthService from "../../repository/authRepository"
import Dashboard from "../Dashboard/dashboard";
import AttractionList from "../Attraction/AttractionList/attractionList";
import AttractionAdd from "../Attraction/AttractionAdd/attractionAdd";
import AttractionEdit from "../Attraction/AttractionEdit/attractionEdit";
import RouteList from "../Route/RouteList/routeList";
import RouteAdd from '../Route/RouteAdd/routeAdd';
import RouteEdit from '../Route/RouteEdit/routeEdit';
import FavoriteCartList from "../FavoriteCart/FavoriteCartList/favoriteCartList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            selectedAttraction: {},
            selectedRoute: {},
            attractions: [],
            attractionTypes: [],
            routes: [],
            routeStatuses: [],
            favoriteCartItems: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                        <Route path={"/dashboard"} exact render={() => <Dashboard/>}/>
                    <Route path={"/login"} exact render={() => <Login onUserSignIn={this.loginUser}/>}/>
                    <Route path={"/register"} exact render={() => <Register onUserRegister={this.registerUser}/>}/>
                        <Route path={"/attractions/edit/:id"} exact
                               render={() => <AttractionEdit attractionTypes={this.state.attractionTypes}
                                                             onEditAttraction={this.editAttraction}
                                                             attraction={this.state.selectedAttraction}/>}/>
                        <Route path={"/attractions/add"} exact
                               render={() => <AttractionAdd attractionTypes={this.state.attractionTypes}
                                                            onAddAttraction={this.addAttraction}/>}/>
                        <Route path={"/attractions"} exact
                               render={() => <AttractionList attractions={this.state.attractions}
                                                             onEdit={this.getAttraction}
                                                             onDelete={this.deleteAttraction}/>}/>
                        <Route path={"/routes/edit/:id"} exact
                               render={() => <RouteEdit routeStatuses={this.state.routeStatuses}
                                                        attractions={this.state.attractions}
                                                        onEditRoute={this.editRoute}
                                                        route={this.state.selectedRoute}/>}/>
                        <Route path={"/routes/add"} exact
                               render={() => <RouteAdd routeStatuses={this.state.routeStatuses}
                                                       attractions={this.state.attractions}
                                                       onAddRoute={this.addRoute}/>}/>
                        <Route path={"/routes"} exact
                               render={() => <RouteList routes={this.state.routes}
                                                        attractions={this.state.attractions}
                                                        onEdit={this.getRoute}
                                                        onDelete={this.deleteRoute}/>}/>
                        <Route path={"/favorite-cart"} exact
                           render={() => <FavoriteCartList items={this.state.favoriteCartItems}
                                                    onRemove={this.removeItem}/>}/>

                        <Route path={"/"} exact render={() => <Dashboard/>}/>
                        {/*<Redirect to={"/dashboard"}/>*/}
                </main>
            </Router>
        );
    }

    loginUser = (email, password) => {
        AuthService.login(email, password)
            .then((data) => {
                this.setState({
                    currentUser: data.data
                })
            })
    }
    registerUser = (email, password, repeatPassword, firsName, lastName, address, contactNumber, role) => {
        RouteService.registerUser(email, password, repeatPassword, firsName, lastName, address, contactNumber, role)
            .then((data) => {
                this.setState({
                    currentUser: data.data
                })
            })
    }
    loadAttractions = () => {
        RouteService.fetchAttractions()
            .then((data) => {
                this.setState({
                    attractions: data.data
                })
            });
    }
    loadRoutes = () => {
        RouteService.fetchRoutes()
            .then((data) => {
                this.setState({
                    routes: data.data
                })
            });
    }

    loadFavoriteCartItems = () => {
        RouteService.fetchFavoriteCartItems()
            .then((data) => {
                this.setState({
                    favoriteCartItems: data.data
                })
            });
    }

    loadAttractionTypes = () => {
        RouteService.fetchAttractionTypes()
            .then((data) => {
                this.setState({
                    attractionTypes: data.data
                })
            });
    }

    loadRouteStatuses = () => {
        RouteService.fetchRouteStatuses()
            .then((data) => {
                this.setState({
                    routeStatuses: data.data
                })
            });
    }

    getAttraction = (id) => {
        RouteService.getAttraction(id)
            .then((data) => {
                this.setState({
                    selectedAttraction: data.data
                })
            })
    }
    getRoute = (id) => {
        RouteService.getRoute(id)
            .then((data) => {
                this.setState({
                    selectedRoute: data.data
                })
            })
    }

    addAttraction = (name, latitude, longitude, location, description, pictures, attractionType) => {
        RouteService.addAttraction(name, latitude, longitude, location, description, pictures, attractionType)
            .then(() => {
                this.loadAttractions();
            })
    }
    addRoute = (name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price) => {
        RouteService.addRoute(name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price)
            .then(() => {
                this.loadRoutes();
            })
    }
    editAttraction = (id, name, latitude, longitude, location, description, pictures, attractionType) => {
        RouteService.editAttraction(id, name, latitude, longitude, location, description, pictures, attractionType)
            .then(() => {
                this.loadAttractions();
            })
    }
    editRoute = (id, name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price) => {
        RouteService.editRoute(id, name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price)
            .then(() => {
                this.loadRoutes();
            })
    }
    deleteAttraction = (id) => {
        RouteService.deleteAttraction(id)
            .then(() => {
                this.loadAttractions();
            });
    }

    deleteRoute = (id) => {
        RouteService.deleteRoute(id)
            .then(() => {
                this.loadRoutes();
            });
    }

    removeItem = (id) => {
        RouteService.removeItem(id)
            .then(() => {
                this.loadFavoriteCartItems();
            });
    }

    componentDidMount() {
        this.loadFavoriteCartItems();
        this.loadAttractionTypes();
        this.loadRouteStatuses();
        this.loadAttractions();
        this.loadRoutes()
    }

}

export default App;
