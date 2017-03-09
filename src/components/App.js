import React, { Component } from 'react';
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap';

import CategoriesTree from '../pages/home/CategoriesTree';

import Menu from './Menu';
import Modal from './Modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      type: '',
      dataForModal: {},
    };
    this.toggleModalState = this.toggleModalState.bind(this);
  }

  toggleModalState(visible, type, data) {
    this.setState({
      isModalOpen: visible,
      type: type ? type : '',
      dataForModal: data ? data : {}
    });
  }

  render() {
    const { isModalOpen, type, dataForModal } = this.state;
    const { children } = this.props;

    return (
      <div className="home-page">
        <Menu toggleModalState={this.toggleModalState}/>
        <Modal toggleModalState={this.toggleModalState}
               isOpen={isModalOpen}
               dataForModal={dataForModal}
               modalType={type}/>
        <Row className="show-grid">
          <Col xs={8} md={4} sm={4}>
            <CategoriesTree />
          </Col>
          <Col xs={10} md={8} sm={8}>
            {
              React.Children.map(children,
                (child) => React.cloneElement(child, {
                  toggleModalState: this.toggleModalState
                })
              )
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;