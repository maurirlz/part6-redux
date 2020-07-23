/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

const Note = ({ note, handleClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li onClick={handleClick}>
      {note.content}
      <strong>{note.important ? ' important ' : ''}</strong>
    </li>
  );
};

// eslint-disable-next-line no-shadow
const Notes = ({ notes, toggleImportanceOf }) => {
  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => toggleImportanceOf(note.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  if (state.filter === 'ALL') {
    return {
      notes: state.notes,
    };
  }

  return {
    notes:
      state.filter === 'IMPORTANT'
        ? state.notes.filter((note) => note.important)
        : state.notes.filter((note) => !note.important),
  };
};

const mapDispatchToProps = {
  toggleImportanceOf,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
