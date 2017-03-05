import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { Panel, Row, Col } from 'react-bootstrap';
import moment from 'moment'

import CategoriesTree from '../pages/home/CategoriesTree';

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
        <Row className="show-grid">
          <Col xs={8} md={4} sm={4}>
            <CategoriesTree folders={this.props.folders}/>
          </Col>
          <Col xs={10} md={8} sm={8}>
            <h2>Notes list {this.props.notes.length > 0 ? ':' : 'is empty'}</h2>
            {this.getNotesList()}
          </Col>
        </Row>
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