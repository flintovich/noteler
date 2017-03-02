import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { EditorState } from 'draft-js';
import { addNote } from '../actions';
import MyEditor from './MyEditor';

const ENTER_KEY_CODE = 13;

@connect(null, { addNote })
class NewNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            //editorState: EditorState.createEmpty()
        };

        this.AddNewNote = this.AddNewNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleKeyDown(e) {
        if(e.keyCode === ENTER_KEY_CODE) {
            this.AddNewNote();
        }
    }

    AddNewNote() {
        this.props.addNote(this.state.text);
        this.setState({
            text: ''
        });
    }


    render() {
        return (
            <div className="new-note">
                <textarea cols="30" rows="10" placeholder="Text here..."
                          onChange={this.handleChange}
                          onKeyDown={this.handleKeyDown} value={this.state.text}/>
                <button onClick={this.AddNewNote}>ADD</button>
            </div>
        );
    }
}

export default NewNote;
