/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { automaticNotification } from '../reducers/notificationReducer';

// eslint-disable-next-line no-shadow
const AnecdoteForm = ({ createAnecdote, automaticNotification }) => {
  const addAnecdote = async (event) => {
    event.preventDefault();

    const textContent = event.target.anecdote.value;
    // eslint-disable-next-line no-param-reassign
    event.target.anecdote.value = '';

    createAnecdote(textContent);
    automaticNotification(`Anecdote ${textContent} sucessfully created.`, 5);
  };

  return (
    <div>
      <h2>post a new anecdote</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default connect(null, { createAnecdote, automaticNotification })(
  AnecdoteForm,
);
