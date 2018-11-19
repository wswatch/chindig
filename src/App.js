import React, { Component } from 'react';
import './App.css';


import Navbar from './Navbar'
import SimpleTabs from './Tabs';

import { HashRouter as Router, Route} from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009bd1',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
  typography: {
    useNextVariants: false,
  }
});

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
        <MuiThemeProvider theme={theme}>
          <Navbar />

          <RouteWithProps exact path='/' component={SimpleTabs}/>
          <RouteWithProps path='/profile' component={SimpleTabs}/>
          <RouteWithProps path='/event/:id' component={SimpleTabs}/>
          {/*<RouteWithProps exact path='/about' component={About}/>*/}
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;