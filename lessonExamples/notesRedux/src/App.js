import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Notes from './Components/Notes';
import NewNote from './Components/NewNote';
import VisibilityFilter from './VisibilityFIlter';
import { initializeNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
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
