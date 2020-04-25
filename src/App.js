import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Sidebar from './components/sidebar';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Sidebar />
            <div className="page-wrapper">
              <div className="page">
                <Routes />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
