import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../Header/header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions:[]
    }
  }

  render() {
    return (
        <Router>
          <Header/>
          <main>
            <div className="container">
            </div>
          </main>
        </Router>
    );
  }

  componentDidMount() {
  }
}

export default App;
