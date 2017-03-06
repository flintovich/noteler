const initialState = JSON.parse(localStorage.getItem('notesList')) || {
  notes: []
};

const getNewNotes = (notes, action) => {
  const newNote = {
    id: action.id,
    title: action.title,
    text: action.text,
    folder: action.folder
  };
  return [newNote, ...notes];
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE': {
      const newNotesList = {
        ...state,
        notes: getNewNotes(state.notes, action)
      };
      localStorage.setItem('notesList', JSON.stringify(newNotesList));
      return newNotesList;
    }

    case 'EDIT_NOTE': {
      console.log(1, action);
      const newNotesList = {
        ...state,
        notes: getNewNotes(state.notes, action)
      };
      return newNotesList;
    }

    default: {
      return state;
    }
  }
}