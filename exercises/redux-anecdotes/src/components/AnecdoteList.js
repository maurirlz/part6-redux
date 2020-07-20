import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>has {anecdote.votes}</div>
      <button onClick={handleClick}>vote</button>
    </div>
  );
};

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  anecdotes.sort((a1, a2) => {
    if (a1.votes < a2.votes) {
      return 1;
    } else if (a1.votes > a2.votes) {
      return -1;
    }

    return 0;
  });

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <Anecdote
          anecdote={anecdote}
          key={anecdote.id}
          handleClick={() => dispatch(voteAnecdote(anecdote.id))}
        />
      ))}
    </>
  );
};

export default AnecdoteList;
