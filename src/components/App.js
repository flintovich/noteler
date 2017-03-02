import React, { Component } from 'react';
import { Link } from 'react-router'

import Menu from './Menu';


class App extends Component {

    render() {
        return (
            <div className="app">
              <Menu />
              {this.props.children}
            </div>
        );
    }
}

export default App;
