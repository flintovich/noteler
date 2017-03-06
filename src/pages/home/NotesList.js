import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { Panel, Row, Col } from 'react-bootstrap';
import moment from 'moment'

@connect(mapStateToProps)
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
            <h4><b>{note.title}</b>  <i onClick={this.handleEditNote.bind(this, note.id)} className="fa fa-pencil-square-o" aria-hidden="true"></i></h4>
        );
      return (
        <Panel key={note.id} header={header} bsStyle="info">
          <time>{moment(note.id).format('DD.MM.YYYY, HH:mm:ss')}</time>
          <div>{note.text}</div>
        </Panel>
      )
    });
  }

    handleEditNote(noteId) {
        //this.props.toggleModalState(true, 'editNote');
        console.log(this.context);
        this.context.router.push(`/folder/${this.props.location.pathname}/${noteId}`);
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
    notes: state.notes.notes
  }
}