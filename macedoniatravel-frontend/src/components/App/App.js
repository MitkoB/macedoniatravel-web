import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../Header/header'
import Register from '../Register/signUpForm'
import RouteService from "../../repository/routeRepository";
import Dashboard from "../Dashboard/dashboard";
import AttractionList from "../Attraction/AttractionList/attractionList";
import AttractionAdd from "../Attraction/AttractionAdd/attractionAdd";
import AttractionEdit from "../Attraction/AttractionEdit/attractionEdit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser:{},
        selectedAttraction:{},
        attractions:[],
        attractionTypes:[]
    }
  }

  render() {
    return (
        <Router>
          <Header/>
          <main>
            <div className="container">
                <Route path={"/dashboard"} exact render={() => <Dashboard/>}/>
                <Route path={"/register"} exact render={() => <Register onUserRegister={this.registerUser}/>}/>
                <Route path={"/attractions/edit/:id"} exact
                       render={() => <AttractionEdit attractionTypes={this.state.attractionTypes}
                                               onEditAttraction={this.editAttraction}
                                               attraction={this.state.selectedAttraction}/>}/>
                <Route path={"/attractions/add"} exact render={() => <AttractionAdd attractionTypes={this.state.attractionTypes}
                                                                        onAddAttraction={this.addAttraction}/>}/>
                <Route path={"/attractions"} exact
                       render={() => <AttractionList attractions={this.state.attractions}
                                                     onEdit={this.getAttraction}
                                                     onDelete={this.deleteAttraction}/>}/>
            </div>
          </main>
        </Router>
    );
  }
    registerUser = (email,password,repeatPassword,firsName,lastName,address,contactNumber,role) => {
        RouteService.registerUser(email,password,repeatPassword,firsName,lastName,address,contactNumber,role)
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

    loadAttractionTypes = () => {
        RouteService.fetchAttractionTypes()
            .then((data) => {
                this.setState({
                    attractionTypes: data.data
                })
            });
    }

    getAttraction = (id) => {
        RouteService.getAttraction(id)
            .then((data)=>{
                this.setState({
                    selectedAttraction: data.data
                })
            })
    }

    addAttraction = (name, latitude, longitude, location, description, pictures, attractionType) => {
        RouteService.addAttraction(name,latitude,longitude,location,description,pictures,attractionType)
            .then(() => {
                this.loadAttractions();
            })
    }
    editAttraction = (id,name, latitude, longitude, location, description, pictures, attractionType) => {
        RouteService.editAttraction(id,name, latitude, longitude, location, description, pictures, attractionType)
            .then(() => {
                this.loadAttractions();
            })
    }
    deleteAttraction = (id) => {
        RouteService.deleteAttraction(id)
            .then(()=>{
                this.loadAttractions();
            });
    }

  componentDidMount() {
      this.loadAttractionTypes();
      this.loadAttractions();
  }

}

export default App;
