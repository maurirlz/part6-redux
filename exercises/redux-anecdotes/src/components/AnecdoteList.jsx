/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { automaticNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>has {anecdote.votes}</div>
      <button onClick={handleClick} type="submit">
        vote
      </button>
    </div>
  );
};

// eslint-disable-next-line no-shadow
const AnecdoteList = ({ anecdotes, voteAnecdote, automaticNotification }) => {
  anecdotes.sort((a1, a2) => {
    if (a1.votes < a2.votes) {
      return 1;
    }
    if (a1.votes > a2.votes) {
      return -1;
    }

    return 0;
  });

  const voteAndNotify = async (anecdote) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    voteAnecdote(updatedAnecdote);
    automaticNotification(`you voted ${updatedAnecdote.content}`, 5);
  };

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <Anecdote
          anecdote={anecdote}
          key={anecdote.id}
          handleClick={() => voteAndNotify(anecdote)}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
  };
};

export default connect(mapStateToProps, {
  voteAnecdote,
  automaticNotification,
})(AnecdoteList);
