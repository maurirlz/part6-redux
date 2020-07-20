import React from 'react';
import AnectoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

const App = () => {
  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnectoteForm />
    </div>
  );
};

export default App;
