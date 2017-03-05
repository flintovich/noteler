const initialState = {
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
      return {
        ...state,
        notes: getNewNotes(state.notes, action)
      };
    }

    default: {
      return state;
    }
  }
}