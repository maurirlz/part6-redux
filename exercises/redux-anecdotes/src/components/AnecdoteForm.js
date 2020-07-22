import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { automaticNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();

    const textContent = event.target.anecdote.value;
    event.target.anecdote.value = '';

    dispatch(createAnecdote(textContent));
    dispatch(
      automaticNotification(`Anecdote ${textContent} sucessfully created.`, 5),
    );
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

export default AnecdoteForm;
