import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { updateFoldersTree } from '../actions';

import newNoteUtils from '../utils/newNote';

@connect(mapStateToProps, {updateFoldersTree})
class NewNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parentFolder: 'Main Folder',
      newFolderName: '',
    };

    this.handleChangeFolder = this.handleChangeFolder.bind(this);
    this.handleChangeNewFolderName = this.handleChangeNewFolderName.bind(this);
    this.addNewFolder = this.addNewFolder.bind(this);
  }

  handleChangeFolder(e) {
    this.setState({
      parentFolder: e.target.value
    });
  }

  handleChangeNewFolderName(e) {
    this.setState({
      newFolderName: e.target.value
    });
  }

  addNewFolder() {
    const foldersTree = JSON.parse(JSON.stringify(this.props.foldersTree));
    const newFolderTree = newNoteUtils.updateFolderTree(this.state.parentFolder, this.state.newFolderName, foldersTree, true);

    this.props.updateFoldersTree(newFolderTree);
    this.props.toggleModalState(false);
  }

  render() {
    const foldersTree = JSON.parse(JSON.stringify(this.props.foldersTree));

    return (
      <div className="new-folder">
        <form>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Add to Folder</ControlLabel>
            <FormControl onChange={this.handleChangeFolder} componentClass="select" placeholder="Select type">
              <option value="Main Folder">Main Folder</option>
              {newNoteUtils.objectToSelectOptions(foldersTree)}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl type="text"
               placeholder="New folder name"
               onChange={this.handleChangeNewFolderName} />
            </FormGroup>
          <Button disabled={this.state.newFolderName === ''} bsStyle="success" onClick={this.addNewFolder}>ADD</Button>
        </form>
      </div>
    );
  }
}

export default NewNote;

function mapStateToProps(state) {
  return {
    foldersTree: state.categories.categories
  }
}
