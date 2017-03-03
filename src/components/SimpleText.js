import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock, Panel } from 'react-bootstrap';

import { addNote } from '../actions';

@connect(null, { addNote })
class SimpleText extends Component {

  constructor(props) {
    super(props);

    this.state = {
      noteTitle: '',
      noteText: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.addNewNote = this.addNewNote.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({
      noteTitle: e.target.value
    });
  }

  handleChangeText(e) {
    this.setState({
      noteText: e.target.value
    });
  }

  addNewNote() {
    this.props.addNote(this.state.noteTitle, this.state.noteText);
    this.props.toggleModalState(false);
  }

  render() {

    const { noteText, noteTitle } = this.state;

    return (
      <Panel header="Simple Note">
        <div>
          <FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Note Title"
            onChange={this.handleChangeTitle}
          />
          <FormGroup controlId="formControlsTextarea">
            <FormControl onChange={this.handleChangeText} componentClass="textarea" placeholder="Note text"/>
          </FormGroup>
          <Button disabled={noteTitle === '' || noteText === ''} onClick={this.addNewNote} bsStyle="success">ADD</Button>
        </div>
      </Panel>
    );
  }
}

export default SimpleText;

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      {label && <ControlLabel>{label}</ControlLabel>}
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}