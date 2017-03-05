import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { Panel, Row, Col } from 'react-bootstrap';
import moment from 'moment'

@connect(mapStateToProps)
class HomePage extends Component {

  getNotesList(folderName) {
    const notes = folderName
      ? this.props.notes.filter(item => item.folder === folderName)
      : this.props.notes;

    return notes.map(note => {
      return (
        <Panel key={note.id} header={<h4>{note.title}</h4>} bsStyle="info">
          <time>{moment(note.id).format('DD.MM.YYYY, HH:mm:ss')}</time>
          <div>{note.text}</div>
        </Panel>
      )
    });
  }

  render() {
    const { folderName } = this.props.routeParams;
    return (
      <Col xs={10} md={8} sm={8}>
        <h2>
          {folderName
            ? `Notes from "${folderName}" folder:`
            : 'All Notes list:'}
        </h2>
        {this.getNotesList(folderName)}
      </Col>
    );
  }
}

export default HomePage;

function mapStateToProps(state) {
  return {
    notes: state.notes.notes
  }
}