import React from "react";
import AnectoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";

const App = () => {
  return (
    <div>
      <AnecdoteList />
      <AnectoteForm />
    </div>
  );
};

export default App;
