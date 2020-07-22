const initialState = '';

// action creators

export const showNotification = (message) => {
  return {
    type: 'SHOW_NOTIFICATION',
    data: message,
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION',
  };
};

export const automaticNotification = (notification, timeout) => {
  return async (dispatch) => {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      data: notification,
    });

    return await new Promise(() =>
      setTimeout(() => {
        dispatch({
          type: 'HIDE_NOTIFICATION',
        });
      }, timeout),
    );
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.data;
    case 'HIDE_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export default reducer;
