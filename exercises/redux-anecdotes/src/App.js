import React, { useEffect } from 'react';
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import anecdotesService from './services/anecdotes';
import { useDispatch } from 'react-redux';
import AnectoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdotesService
      .getAllAnecdotes()
      .then((anecdotes) => {
        dispatch(initializeAnecdotes(anecdotes));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnectoteForm />
    </div>
  );
};

export default App;
