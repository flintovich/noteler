import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { updateFoldersTree } from '../actions';
import newNoteUtils from '../utils/newNote';
import { MAIN_FOLDER } from '../constants';

@connect(mapStateToProps, {updateFoldersTree})
class NewNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parentFolder: MAIN_FOLDER,
      newFolderName: '',
    };

    this.handleChangeFolder = this.handleChangeFolder.bind(this);
    this.handleChangeNewFolderName = this.handleChangeNewFolderName.bind(this);
    this.addNewFolder = this.addNewFolder.bind(this);
  }

  componentWillMount() {
    const foldersTree = JSON.parse(JSON.stringify(this.props.foldersTree));
    this.folderTree = newNoteUtils.objectToSelectOptions(foldersTree)
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
    const newFolderTree = newNoteUtils.updateFolderTree(
      this.state.parentFolder,
      this.state.newFolderName,
      JSON.parse(JSON.stringify(foldersTree)),
      true
    );

    this.props.updateFoldersTree(newFolderTree);
    this.props.toggleModalState(false);
  }

  render() {
    return (
      <div className="new-folder">
        <form>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Add to Folder</ControlLabel>
            <FormControl onChange={this.handleChangeFolder} componentClass="select" placeholder="Select type">
              {this.folderTree}
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
