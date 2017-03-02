const initialState = {
  notes: []
};

const getNewNotes = (notes, action) => {
  const newNote = {
    id: action.id,
    title: action.title,
    text: action.text
  };
  return [newNote, ...notes];
};

export default function todos(state = initialState, action) {
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