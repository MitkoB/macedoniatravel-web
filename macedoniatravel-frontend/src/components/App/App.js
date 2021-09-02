import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Header from '../Header/header'
import Register from '../Register/signUpForm'
import Login from '../Login/loginForm'
import RouteService from "../../repository/routeRepository";
import Dashboard from "../Dashboard/dashboard";
import AttractionList from "../Attraction/AttractionList/attractionList";
import AttractionAdd from "../Attraction/AttractionAdd/attractionAdd";
import AttractionEdit from "../Attraction/AttractionEdit/attractionEdit";
import RouteList from "../Route/RouteList/routeList";
import RouteAdd from '../Route/RouteAdd/routeAdd';
import RouteEdit from '../Route/RouteEdit/routeEdit';
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
            selectedFamousEvent: {},
            attractions: [],
            attractionTypes: [],
            routes: [],
            routeStatuses: [],
            favoriteCartItems: [],
            famousEvents: [],
            isLoggedIn: TokenService.getLocalAccessToken()
        }
    }

    render() {
        return (
            <Router>
                <HeaderRoute component={Header} />
                <HeaderRoute component={Header} />
                <main>
                    <Switch>
                        <PublicRoute restricted={false} component={Dashboard} path="/dashboard" exact/>
                        <PublicRoute restricted={true} component={Login} path="/login" exact/>
                        <PublicRoute restricted={true} onUserRegister={this.registerUser} component={Register}
                                     path="/register" exact/>
                        <PublicRoute restricted={true} component={ConfirmAccount} path="/confirm-account" exact/>

                        <PrivateRoute component={AttractionEdit} path="/attractions/edit/:id"
                                      attractionTypes={this.state.attractionTypes}
                                      onEditAttraction={this.editAttraction}
                                      attraction={this.state.selectedAttraction}
                                      exact/>
                        <PrivateRoute component={AttractionAdd} path="/attractions/add"
                                      attractionTypes={this.state.attractionTypes}
                                      onAddAttraction={this.addAttraction}
                                      exact/>
                        <PrivateRoute component={AttractionList} path="/attractions"
                                      attractions={this.state.attractions}
                                      onEdit={this.getAttraction}
                                      onDelete={this.deleteAttraction}
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
                        <PrivateRoute component={RouteList} path="/routes"
                                      routes={this.state.routes}
                                      onEdit={this.getRoute}
                                      onDelete={this.deleteRoute}
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
                        <PublicRoute restricted={false} component={FamousEventList} path="/famous-events"
                                     famousEvents={this.state.famousEvents}
                                     onEdit={this.getFamousEvent}
                                     onDelete={this.deleteFamousEvent}
                                     exact/>

                        <PublicRoute restricted={false} component={Dashboard} path="/dashboard" exact/>
                    </Switch>
                </main>
                <PublicRoute restricted={false} component={Footer}/>
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
    addFamousEvent = (title, description, start, end, picture, location) => {
        RouteService.addFamousEvent(title, description, start, end, picture, location)
            .then(() => {
                this.loadFamousEvents();
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
        this.loadFamousEvents();
        this.loadAttractions();
        this.loadRoutes()
    }

}

export default App;
