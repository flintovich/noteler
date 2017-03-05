export const addNote = (title, text, folder) => (
  {
    type: 'ADD_NOTE',
    id: Date.now(),
    title,
    text,
    folder,
  }
);

export const addFolder = dataList => {
  return {
    type: 'UPDATE_FOLDERS_TREE',
    dataList
  }
};

export const updateFoldersTree = dataList => {
  return {
    type: 'UPDATE_FOLDERS_TREE',
    dataList
  }
};