import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import Tabs from './Tabs';
import SimpleText from './SimpleText';
import TestComponent from './TestComponent';
import newNoteUtils from '../utils/newNote';
import { MAIN_FOLDER } from '../constants';

@connect(mapStateToProps)
class EditNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      type: '',
      folder: MAIN_FOLDER,
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeFolder = this.handleChangeFolder.bind(this);
  }

  componentWillMount() {
    const foldersTree = JSON.parse(JSON.stringify(this.props.folders));
    this.folderTree = newNoteUtils.objectToSelectOptions(foldersTree)
  }

  handleChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  handleChangeFolder(e) {
    this.setState({
      folder: e.target.value
    });
  }

  render() {
    const { type, folder } = this.state;

    return (
      <div className="new-note">
        <form>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select Note Folder</ControlLabel>
            <FormControl onChange={this.handleChangeFolder} componentClass="select" placeholder="Select type">
              {this.folderTree}
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select Note type</ControlLabel>
            <FormControl onChange={this.handleChangeType} componentClass="select" placeholder="Select type">
              <option>Select type</option>
              <option value="text">Simple note</option>
              <option value="other">other</option>
            </FormControl>
          </FormGroup>
          <Tabs activeTab={type}>
            <SimpleText tabId="text" toggleModalState={this.props.toggleModalState} folder={folder}/>
            <TestComponent tabId="other"/>
          </Tabs>
        </form>
      </div>
    );
  }
}

export default EditNote;

function mapStateToProps(state) {
  return {
    folders: state.categories.categories
  }
}