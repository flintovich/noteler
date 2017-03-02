import React, { Component } from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">Noteler</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}><Link to="/home">Home</Link></NavItem>
          <NavItem eventKey={2} onClick={this.props.toggleModalState.bind(this, true)}>Create Note</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
