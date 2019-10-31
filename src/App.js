import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import LoginComponent from './components/LoginComponent';
import DashboardComponents from './components/DashboardComponents/LandingComponent';
import SettingComponents from './components/SettingComponents/SettingComponent';
import CustomersComponent from './components/CustomersComponents/CustomersComponent';
import TransportComponent from './components/TransportComponents/TransportComponent';

import {
  BrowserRouter as Router,
  Route  
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    // <LoginComponent/>
     <Router>
        <div className="App">
          <Route exact path="/" component={LoginComponent} />
          <Route exact path="/Dashboard" component={DashboardComponents} />
          <Route exact path="/Setting" component={SettingComponents} />
          <Route exact path="/Customers" component={CustomersComponent} />
          <Route exact path="/Transport" component={TransportComponent} />
          <Route exact path="/Logout" component={LoginComponent} />
        </div>
      </Router>
    );
  }

}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
