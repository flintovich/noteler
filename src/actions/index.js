export const addNote = (title, text) => (
  {
    type: 'ADD_NOTE',
    id: Date.now(),
    title,
    text
  }
);

export const removeNote = id => (
  {
    type: 'REMOVE_NOTE',
    id
  }
);