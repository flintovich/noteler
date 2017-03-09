import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { Panel, Row, Col } from 'react-bootstrap';
import moment from 'moment'

import { removeNote, removeFileFromTree } from '../../actions/index'

@connect(mapStateToProps, {removeNote, removeFileFromTree})
class HomePage extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  getNotesList(folderName) {
    const notes = folderName
      ? this.props.notes.filter(item => item.folder === folderName)
      : this.props.notes;

    return notes.map(note => {
      const header = (
        <h4>
          <b>{note.title}</b>
        </h4>
      );
      const footer = (
        <div>
          <time>{moment(note.id).format('DD.MM.YYYY, HH:mm:ss')}</time>
          <i onClick={this.handleEditNote.bind(this, note.id)}
             className="fa fa-pencil-square-o"
             aria-hidden="true"></i>

          <i onClick={this.handleRemoveNote.bind(this, note.id)}
             className="fa fa-trash"
             aria-hidden="true"></i>
        </div>
      );

      return (
        <Panel key={note.id} footer={footer} header={header} bsStyle="info">
          <div>{note.text}</div>
        </Panel>
      )
    });
  }

  handleEditNote(noteId) {
    this.props.toggleModalState(true, 'editNote', {noteId});
  }

  handleRemoveNote(noteId) {
    this.props.removeNote(noteId);
    this.props.removeFileFromTree(noteId);
  }

  render() {
    const { folderName } = this.props.routeParams;
    return (
      <div>
        <h3>
          {folderName
            ? `Notes from "${folderName}" folder:`
            : 'All Notes list:'}
        </h3>
        {this.getNotesList(folderName)}
      </div>
    );
  }
}

export default HomePage;

function mapStateToProps(state) {
  return {
    notes: state.notes.notes,
    folders: state.categories.categories
  }
}