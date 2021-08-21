import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../Header/header'
import Register from '../Register/signUpForm'
import RouteService from "../../repository/routeRepository";
import Dashboard from "../Dashboard/dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidMount() {
  }
}

export default App;
