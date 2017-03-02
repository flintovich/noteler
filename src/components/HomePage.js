import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

@connect(mapStateToProps)
class HomePage extends Component {

    getNotesList() {
        return this.props.notes.map(note => (
          <div key={note.id}>{note.text}</div>
        ));
    }

    render() {
        return (
            <div className="home-page">
                Notes list {this.props.notes.length > 0 ? ':' : 'is empty'}
                {this.getNotesList()}
            </div>
        );
    }
}

export default HomePage;

function mapStateToProps (state) {
    return {
        notes: state.notes.notes
    }
}