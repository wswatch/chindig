import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar'
import SimpleTabs from './Tabs';

import { HashRouter as Router, Route} from 'react-router-dom';


const RouteWithProps = ({ component: Component, props, ...extraProps }) => (
  <Route
    {...extraProps}
    render={routeProps => <Component {...props} {...routeProps} />}
  />
);



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <RouteWithProps exact path='/' component={SimpleTabs}/>
          <RouteWithProps path='/upload' component={SimpleTabs}/>
          <RouteWithProps path='/view/:id' component={SimpleTabs}/>
          {/*<RouteWithProps exact path='/about' component={About}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;