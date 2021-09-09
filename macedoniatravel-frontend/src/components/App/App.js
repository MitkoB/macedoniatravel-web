import './App.css';
import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Header from '../Header/header'
import Register from '../Register/signUpForm'
import Login from '../Login/loginForm'
import RouteService from "../../repository/routeRepository";
import Dashboard from "../Dashboard/dashboard";
import About from "../About/about"

import AttractionList from "../Attraction/AttractionList/attractionList";
import AttractionAdd from "../Attraction/AttractionAdd/attractionAdd";
import AttractionEdit from "../Attraction/AttractionEdit/attractionEdit";
import Attraction from "../Attraction/AttractionTerm/attractionTerm"

import RouteList from "../Route/RouteList/routeList";
import RouteAdd from '../Route/RouteAdd/routeAdd';
import RouteEdit from '../Route/RouteEdit/routeEdit';
import RouteDetail from '../Route/RouteTerm/routeTerm'

import FavoriteCartList from "../FavoriteCart/FavoriteCartList/favoriteCartList";
import FamousEventList from "../FamousEvent/FamousEventList/famousEventList"
import FamousEventAdd from "../FamousEvent/FamousEventAdd/famousEventAdd"
import FamousEventEdit from "../FamousEvent/FamousEventEdit/famousEventEdit"

import TokenService from '../../repository/tokenRepository'
import ConfirmAccount from "../ConfirmAccount/confirmAccount";
import PrivateRoute from "../../routes/privateRoute";
import PublicRoute from "../../routes/publicRoute";
import HeaderRoute from "../../routes/headerRoute";
import Footer from "../Footer/footer";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            selectedAttraction: {},
            selectedRoute: {},
            selectedReview:{},
            selectedFamousEvent: {},
            attractions: [],
            attractionTypes: [],
            routes: [],
            allReviews: [],
            routeStatuses: [],
            favoriteCartItems: [],
            famousEvents: [],
            isLoggedIn: TokenService.getLocalAccessToken(),
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <PublicRoute restricted={false} component={Login} path="/login" exact/>
                    <PublicRoute restricted={false} onUserRegister={this.registerUser} component={Register}
                                 path="/register" exact/>
                    <PublicRoute restricted={false} component={ConfirmAccount} path="/confirm-account" exact/>

                    <Fragment>
                        <HeaderRoute component={Header}/>
                        <Switch>
                            <PublicRoute restricted={false} component={Dashboard} path="/dashboard" exact/>
                            <PrivateRoute component={AttractionEdit} path="/attractions/edit/:id"
                                          attractionTypes={this.state.attractionTypes}
                                          onEditAttraction={this.editAttraction}
                                          attraction={this.state.selectedAttraction}
                                          exact/>
                            <PrivateRoute component={AttractionAdd} path="/attractions/add"
                                          attractionTypes={this.state.attractionTypes}
                                          onAddAttraction={this.addAttraction}
                                          exact/>
                            <PrivateRoute component={Attraction} path="/attractions/:id"
                                          attraction={this.state.selectedAttraction}
                                          onEdit={this.getAttraction}
                                          onDelete={this.deleteAttraction}
                                          exact/>
                            <PrivateRoute component={AttractionList} path="/attractions"
                                          attractions={this.state.attractions}
                                          attractionTypes={this.state.attractionTypes}
                                          onEdit={this.getAttraction}
                                          onDelete={this.deleteAttraction}
                                          onSelect={this.getAttraction}
                                          onSearchAttraction={this.searchAttraction}
                                          exact/>


                            <PrivateRoute component={RouteEdit} path="/routes/edit/:id"
                                          routeStatuses={this.state.routeStatuses}
                                          attractions={this.state.attractions}
                                          onEditRoute={this.editRoute}
                                          route={this.state.selectedRoute}
                                          exact/>
                            <PrivateRoute component={RouteAdd} path="/routes/add"
                                          routeStatuses={this.state.routeStatuses}
                                          attractions={this.state.attractions}
                                          onAddRoute={this.addRoute}
                                          exact/>
                            <PrivateRoute component={RouteDetail} path="/routes/:id"
                                          route={this.state.selectedRoute}
                                          reviews={this.state.allReviews}
                                          onAddReview={this.addRouteReview}
                                          onRemoveReview={this.deleteRouteReview}
                                          onAddItemInFavoriteCart={this.addRouteInFavoriteCart}
                                          onEdit={this.getRoute}
                                          onDelete={this.deleteRoute}
                                          exact/>
                            <PrivateRoute component={RouteList} path="/routes"
                                          routes={this.state.routes}
                                          onEdit={this.getRoute}
                                          onDelete={this.deleteRoute}
                                          onSearchRoute={this.searchRoute}
                                          onSelect={this.getRoute}
                                          exact/>



                            <PrivateRoute component={FavoriteCartList} path="/favorite-cart"
                                          items={this.state.favoriteCartItems}
                                          onRemove={this.removeItem}
                                          exact/>


                            <PrivateRoute component={FamousEventEdit} path="/famous-events/edit/:id"
                                          onEditFamousEvent={this.editFamousEvent}
                                          famousEvent={this.state.selectedFamousEvent}
                                          exact/>
                            <PrivateRoute component={FamousEventAdd} path="/famous-events/add"
                                          onAddFamousEvent={this.addFamousEvent}
                                          exact/>
                            <PrivateRoute component={FamousEventList} path="/famous-events"
                                         famousEvents={this.state.famousEvents}
                                         onEdit={this.getFamousEvent}
                                         onDelete={this.deleteFamousEvent}
                                         exact/>

                            <PrivateRoute component={About} path="/about" exact/>


                            <PublicRoute restricted={false} component={Dashboard} path="/" exact/>
                        </Switch>
                        <PublicRoute restricted={false} component={Footer}/>
                    </Fragment>
                </Switch>
            </Router>
        );
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
                    attractions: data.data,
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
    loadRouteReviews = (id) => {
        RouteService.fetchRouteReviews(id)
            .then((data) => {
                this.setState({
                    allReviews: data.data
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
    loadFamousEvents = () => {
        RouteService.fetchFamousEvents()
            .then((data) => {
                this.setState({
                    famousEvents: data.data
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
    getFamousEvent = (id) => {
        RouteService.getFamousEvent(id)
            .then((data) => {
                this.setState({
                    selectedFamousEvent: data.data
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
    addRouteInFavoriteCart = (id) => {
        RouteService.addFavoriteCartItem(id)
            .then(() => {
                this.loadFavoriteCartItems();
            })
    }
    addRouteReview = (id, comment, grade) => {
        RouteService.addRouteReview(id, comment, grade)
            .then(() => {
                this.loadRouteReviews(id);
            })
    }
    addFamousEvent = (title, description, start, end, picture, location) => {
        RouteService.addFamousEvent(title, description, start, end, picture, location)
            .then(() => {
                this.loadFamousEvents();
            })
    }
    editAttraction = (id, name, latitude, longitude, location, description, pictures, attractionType) => {
        RouteService.editAttraction(id, name, latitude, longitude, location, description, pictures, attractionType)
            .then((data) => {
                this.setState({
                    selectedAttraction: data.data
                })
            })
    }
    editRoute = (id, name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price) => {
        RouteService.editRoute(id, name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price)
            .then((data) => {
                this.setState({
                    selectedRoute: data.data
                })
            })
    }
    editFamousEvent = (id, title, description, start, end, picture, location) => {
        RouteService.editFamousEvent(id, title, description, start, end, picture, location)
            .then(() => {
                this.loadFamousEvents();
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

    deleteFamousEvent = (id) => {
        RouteService.deleteFamousEvent(id)
            .then(() => {
                this.loadFamousEvents();
            });
    }

    deleteRouteReview = (id, routeId) => {
        RouteService.deleteRouteReview(id)
            .then(() => {
                this.loadRouteReviews(routeId);
            });
    }

    removeItem = (id) => {
        RouteService.removeItem(id)
            .then(() => {
                this.loadFavoriteCartItems();
            });
    }


    searchAttraction = (name) => {
        RouteService.searchAttractions(name)
            .then((data) => {
                this.setState({
                    attractions: data.data
                })
            })
    }
    searchRoute = (name) => {
        RouteService.searchRoute(name)
            .then((data) => {
                this.setState({
                    routes: data.data
                })
            })
    }


    componentDidMount() {
        this.loadFavoriteCartItems();
        this.loadAttractionTypes();
        this.loadRouteStatuses();
        this.loadFamousEvents();
        this.loadAttractions();
        this.loadRoutes()
    }
}

export default App;
