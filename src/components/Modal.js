import React, { Component } from 'react';
import { Modal, Nav, NavItem, Button } from 'react-bootstrap';

import NewNote from './NewNote';
import NewFolder from './NewFolder';

class ModalWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  getModalContent(modalType) {
    const hash = {
      createNewNote: {
        title: 'Add New Note',
        content: <NewNote toggleModalState={this.props.toggleModalState}/>
      },
      addNewFolder: {
        title: 'Add New Folder',
        content: <NewFolder toggleModalState={this.props.toggleModalState}/>
      }
    };

    if(hash[modalType]) {
      return hash[modalType];
    }

    return {
      title: '',
      content: ''
    };
  }

  render() {
    const { isOpen, toggleModalState, modalType } = this.props;
    return (
      <Modal
        show={isOpen}
        onHide={toggleModalState.bind(this, false)}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            {this.getModalContent(modalType).title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.getModalContent(modalType).content}
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalWindow;
