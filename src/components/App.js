import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import CategoriesTree from '../pages/home/CategoriesTree';

import Menu from './Menu';
import Modal from './Modal';

@connect(mapStateToProps)
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
      <div className="home-page">
        <Menu toggleModalState={this.toggleModalState}/>
        <Modal toggleModalState={this.toggleModalState}
               isOpen={this.state.isModalOpen}
               modalType={this.state.type}/>
        <Row className="show-grid">
          <Col xs={8} md={4} sm={4}>
            <CategoriesTree folders={this.props.folders}/>
          </Col>
          <Col xs={10} md={8} sm={8}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

function mapStateToProps(state) {
  return {
    folders: state.categories.categories
  }
}
