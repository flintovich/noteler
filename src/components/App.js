import React, { Component } from 'react';
import { Link } from 'react-router'

import Menu from './Menu';
import Modal from './Modal';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      type: '',
    };
    this.toggleModalState = this.toggleModalState.bind(this);
  }

  toggleModalState(visible, type) {
    this.setState({
      isModalOpen: visible,
      type: type ? type : ''
    });
  }

  render() {
    return (
      <div className="app">
        <Menu toggleModalState={this.toggleModalState}/>
        <Modal toggleModalState={this.toggleModalState}
          isOpen={this.state.isModalOpen}
          modalType={this.state.type}/>
          {this.props.children}
      </div>
    );
  }
}

export default App;
