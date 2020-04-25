import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/header';
import Home from './containers/home';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <div className="page">
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
