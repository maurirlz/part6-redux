import noteService from '../services/notes';

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
  return async (dispatch) => {
    const newNote = await noteService.createNewNote(content);
    dispatch({
      type: 'NEW_NOTE',
      data: newNote,
    });
  };
};

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch({
      type: 'INIT_NOTES',
      data: notes,
    });
  };
};

export default noteReducer;
