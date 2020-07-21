import React, { useEffect } from 'react';
import noteService from './services/notes';
import Notes from './Components/Notes';
import NewNote from './Components/NewNote';
import VisibilityFilter from './VisibilityFIlter';
import { useDispatch } from 'react-redux';
import { initializeNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService
      .getAll()
      .then((notes) => {
        dispatch(initializeNotes(notes));
      })
      .catch(() => {
        console.log('Error trying to retrieve notes from server.');
      });
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
