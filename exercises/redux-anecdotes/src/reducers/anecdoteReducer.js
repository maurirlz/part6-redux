export const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
];

const getId = () => (100000 * Math.random()).toFixed(0);

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

export const asObjectWithoutId = (anecdote) => {
  return {
    content: anecdote,
    votes: 0,
  };
};

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  };
};

export const voteAnecdote = (id) => {
  return {
    type: 'VOTEUP',
    data: {
      id,
    },
  };
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default reducer;
