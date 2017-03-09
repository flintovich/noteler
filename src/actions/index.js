export const addNote = (id, title, text, folder) => (
  {
    type: 'ADD_NOTE',
    id,
    title,
    text,
    folder
  }
);

export const removeNote = (id) => (
  {
    type: 'REMOVE_NOTE',
    id
  }
);

export const editNote = (id, title, text, folder) => (
  {
    type: 'EDIT_NOTE',
    id,
    title,
    text,
    folder
  }
);

export const removeFileFromTree = (id) => (
  {
    type: 'REMOVE_FILE_FROM_TREE',
    id
  }
);

export const updateFoldersTree = dataList => {
  return {
    type: 'UPDATE_FOLDERS_TREE',
    dataList
  }
};