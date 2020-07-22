import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import {
  showNotification,
  hideNotification,
  automaticNotification,
} from '../reducers/notificationReducer';

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
  const anecdotes = useSelector((state) => state.anecdotes);
  anecdotes.sort((a1, a2) => {
    if (a1.votes < a2.votes) {
      return 1;
    } else if (a1.votes > a2.votes) {
      return -1;
    }

    return 0;
  });

  const voteAndNotify = async (anecdote) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    dispatch(voteAnecdote(updatedAnecdote));
    //  dispatch(
    // showNotification(
    // `You voted ${updatedAnecdote.content}, current votes: ${updatedAnecdote.votes} `,
    // ),
    // );
    // setTimeout(() => dispatch(hideNotification()), 1900);
    dispatch(
      automaticNotification(`you voted ${updatedAnecdote.content}`, 1900),
    );
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

export default AnecdoteList;
