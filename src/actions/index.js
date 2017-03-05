export const addNote = (title, text, folder) => (
  {
    type: 'ADD_NOTE',
    id: Date.now(),
    title,
    text,
    folder,
  }
);

export const removeNote = id => (
  {
    type: 'REMOVE_NOTE',
    id
  }
);

export const updateFoldersTree = dataList => {
  console.log('-->', dataList);
  return {
    type: 'UPDATE_FOLDERS_TREE',
    dataList
  }
};