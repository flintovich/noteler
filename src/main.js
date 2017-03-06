import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute,  browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import NotesList from './pages/home/NotesList';
import App from './components/App';
import TestComponent from './components/TestComponent';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={NotesList}/>
    <Route path="folder/:folderName" component={NotesList}/>
    <Route path="folder/:folderName/:editingFileName" component={NotesList}/>
    <Route path="*" component={TestComponent}/>
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
