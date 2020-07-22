const initialState = '';

// action creators

export const showNotification = (message) => {
  return {
    type: 'SHOW_NOTIFICATION',
    data: {
      message,
    },
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.data.message;
    case 'HIDE_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export default reducer;
