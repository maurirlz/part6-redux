import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();

    const textContent = event.target.anecdote.value;
    event.target.anecdote.value = "";

    dispatch(createAnecdote(textContent));
  };

  return (
    <div>
      <h2>create new</h2>
      <form>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewAnecdote;
