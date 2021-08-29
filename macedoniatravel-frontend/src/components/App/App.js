import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            selectedAttraction: {},
            selectedRoute: {},
            selectedFamousEvent:{},
            attractions: [],
            attractionTypes: [],
            routes: [],
            routeStatuses: [],
            favoriteCartItems: [],
            famousEvents:[],
            isLoggedIn: TokenService.getLocalAccessToken()
        }
    }

    render() {
        return (
            <Router>
                <Header key={this.state.isLoggedIn} loggedStatus={this.state.isLoggedIn} />
                <main>
                    <Route path={"/dashboard"} exact render={() => <Dashboard/>}/>
                    <Route path={"/login"} exact render={() => <Login />}/>
                    <Route path={"/register"} exact render={() => <Register onUserRegister={this.registerUser}/>}/>
                    <Route path={"/confirm-account"} exact render={() => <ConfirmAccount />} />
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
                        <Route path={"/famous-events/edit/:id"} exact
                           render={() => <FamousEventEdit onEditFamousEvent={this.editFamousEvent}
                                                    famousEvent={this.state.selectedFamousEvent}/>}/>
                        <Route path={"/famous-events/add"} exact
                           render={() => <FamousEventAdd onAddFamousEvent={this.addFamousEvent}/>}/>
                        <Route path={"/famous-events"} exact
                           render={() => <FamousEventList famousEvents={this.state.famousEvents}
                                                           onEdit={this.getFamousEvent}
                                                           onDelete={this.deleteFamousEvent}/>}/>

                        <Route path={"/"} exact render={() => <Dashboard/>}/>
                        {/*<Redirect to={"/dashboard"}/>*/}
                </main>
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

    checkLoginStatus = () => {
        this.setState({
            isLoggedIn: TokenService.getLocalAccessToken()
        })
    }

    componentDidMount() {
        this.loadFavoriteCartItems();
        this.checkLoginStatus();
        this.loadAttractionTypes();
        this.loadRouteStatuses();
        this.loadFamousEvents();
        this.loadAttractions();
        this.loadRoutes()
    }

}

export default App;
