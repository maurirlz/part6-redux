const initialState = null;

// action creators

export const newAnecdoteNotification = (anecdoteTitle) => {
  return {
    type: 'NEW ANECDOTE',
    data: {
      anecdoteTitle,
    },
  };
};

export const votedAnecdoteNotification = (anecdoteTitle) => {
  return {
    type: 'VOTED ANECDOTE',
    data: {
      anecdoteTitle,
    },
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE NOTIFICATION',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW ANECDOTE':
      return `You created a new Anecdote with the title: ${action.data.anecdoteTitle}`;
    case 'VOTED ANECDOTE':
      return `You voted up ${action.data.anecdoteTitle}`;
    case 'HIDE NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export default reducer;
