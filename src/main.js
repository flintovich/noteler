import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute,  browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import HomePage from './pages/home/NotesList';
import App from './components/App';
import TestComponent from './components/TestComponent';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="folder/:folderName" component={HomePage}/>
    <Route path="*" component={TestComponent}/>
  </Route>
);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
