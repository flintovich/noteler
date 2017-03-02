import React, { Component } from 'react';
import { Link } from 'react-router'

class Menu extends Component {

    render() {
        return (
            <ul className="navigation">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/new-note">Create Note</Link></li>
            </ul>
        );
    }
}

export default Menu;
