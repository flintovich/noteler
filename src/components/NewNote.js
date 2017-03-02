import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
//import { EditorState } from 'draft-js';
//import MyEditor from './MyEditor';
import Tabs from './Tabs';
import SimpleText from './SimpleText';
import TestComponent from './TestComponent';


class NewNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      category: ''
      //editorState: EditorState.createEmpty()
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  render() {
    return (
      <div className="new-note">
        <form>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select Note category</ControlLabel>
            <FormControl onChange={this.handleChangeCategory} componentClass="select" placeholder="Select category">
              <option>Select category</option>
              <option value="text">Simple note</option>
              <option value="other">other</option>
            </FormControl>
          </FormGroup>
          <Tabs activeTab={this.state.category}>
            <SimpleText tabId="text" toggleModalState={this.props.toggleModalState}/>
            <TestComponent tabId="other"/>
          </Tabs>
        </form>
      </div>
    );
  }
}

export default NewNote;
