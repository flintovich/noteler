import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import HomePage from './components/HomePage';
import NewNote from './components/NewNote';
import App from './components/App';

const routes = (
    <Route path="/" component={App}>
        <Route path='/home' component={HomePage} />
        <Route path='/new-note' component={NewNote} />
    </Route>
);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
