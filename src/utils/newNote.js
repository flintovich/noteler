import React from 'react';

class newNoteUtils {

  objectToSelectOptions(foldersData) {
    const optionsList = [];
    this.getFolders(foldersData, '', optionsList);
    return optionsList;
  }

  getFolders(data, prefix, optionsList) {
    const pref = `${prefix}--`;
    data.forEach((item, index) => {
      if(item.children) {
        optionsList.push(<option key={`${item.name}-${index}`} value={item.name}>{pref} {item.name}</option>);
        this.getFolders(item.children, pref, optionsList);
      }
    });
  }

  updateFolderTree(id, folder, noteTitle, data, isFolder) {
    /* if isFolder is false ti means that is's note */
    const noteData = {id, folder, noteTitle, isFolder};
    const folderData = [...data];
    this.folderLoop(folderData, noteData);
    return folderData;
  }

  /* TODO need to refactor */
  folderLoop(data, noteData) {
    data.forEach((item) => {
      if(item.name === noteData.folder) {
        const newItem = noteData.isFolder ? {
          name: noteData.noteTitle,
          children: []
        } : {
          id: noteData.id,
          name: noteData.noteTitle
        };
        item.children = [...item.children, newItem];
      } else if (item.children && item.name !== noteData.folder) {
        this.folderLoop(item.children, noteData);
      }
    });
  }

  removeFileFromTree(data, id) {
    return data.filter(item => {
      if (item.children) {
        item.children = this.removeFileFromTree(item.children, id);
      }
      return item.id !== id;
    });
  }

}

export default new newNoteUtils();
