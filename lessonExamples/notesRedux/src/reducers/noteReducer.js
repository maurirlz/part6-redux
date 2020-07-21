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
    case 'INIT_NOTES':
      return action.data;
    default:
      return state;
  }
};

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id },
  };
};

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
    },
  };
};

export const initializeNotes = (notes) => {
  return {
    type: 'INIT_NOTES',
    data: notes,
  };
};

export default noteReducer;
