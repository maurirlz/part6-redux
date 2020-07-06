import React from "react";
import Notes from "./Components/Notes";
import NewNote from "./Components/NewNote";

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
