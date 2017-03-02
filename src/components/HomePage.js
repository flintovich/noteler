import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

import moment from 'moment'

@connect(mapStateToProps)
class HomePage extends Component {

  getNotesList() {
    return this.props.notes.map(note => {
      return (
        <Panel key={note.id} header={<h4>{note.title}</h4>} bsStyle="info">
          <time>{moment(note.id).format('DD.MM.YYYY, HH:mm:ss')}</time>
          <div>{note.text}</div>
        </Panel>
      )
    });
  }

  render() {
    return (
      <div className="home-page">
        <h2>Notes list {this.props.notes.length > 0 ? ':' : 'is empty'}</h2>
        {this.getNotesList()}
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