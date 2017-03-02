export const addNote = text => (
  {
    type: 'ADD_NOTE',
    id: Date.now(),
    text
  }
);

export const removeNote = id => (
  {
    type: 'REMOVE_NOTE',
    id
  }
);