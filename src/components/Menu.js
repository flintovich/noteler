import React, { Component } from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Noteler</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} onClick={this.props.toggleModalState.bind(this, true, 'addNewFolder')}>Add Folder</NavItem>
          <NavItem eventKey={2} onClick={this.props.toggleModalState.bind(this, true, 'createNewNote')}>Add Note</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
