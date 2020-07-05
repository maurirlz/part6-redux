const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data];
    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id;
      const noteToFind = state.find((note) => note.id === id);
      const changedNote = {
        ...noteToFind,
        important: !noteToFind.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
  }
  return state;
};

export default noteReducer;
