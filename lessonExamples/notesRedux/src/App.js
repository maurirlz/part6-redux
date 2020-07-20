import React from 'react';
import Notes from './Components/Notes';
import NewNote from './Components/NewNote';
import VisibilityFilter from './VisibilityFIlter';

const App = () => {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
