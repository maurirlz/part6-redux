/* eslint-disable no-case-declarations */
import anecdoteService from '../services/anecdotes';

// helpers

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0,
  };
};

export const asObjectWithoutId = (anecdote) => {
  return {
    content: anecdote,
    votes: 0,
  };
};

// action creators

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const returnedNote = await anecdoteService.createNewAnecdote(content);
    dispatch({
      type: 'NEW_ANECDOTE',
      data: returnedNote,
    });
  };
};

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateLikesOnAnecdote(
      anecdote,
    );
    dispatch({
      type: 'VOTEUP',
      data: updatedAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAllAnecdotes();
    dispatch({
      type: 'INITIALIZE_ANECDOTES',
      data: anecdotes,
    });
  };
};

// reducer

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTEUP':
      const anecdoteId = action.data.id;

      const anecdoteToVoteUp = state.find(
        (anecdote) => anecdote.id === anecdoteId,
      );

      const votedAnecdote = {
        ...anecdoteToVoteUp,
        votes: anecdoteToVoteUp.votes + 1,
      };

      return state.map((anecdote) =>
        anecdote.id !== anecdoteId ? anecdote : votedAnecdote,
      );
    case 'NEW_ANECDOTE':
      const newAnecdote = asObject(action.data.content);

      return [...state, newAnecdote];
    case 'INITIALIZE_ANECDOTES':
      return action.data;

    default:
      return state;
  }
};

export default reducer;
