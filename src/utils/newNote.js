import React from 'react';

class newNoteUtils {

  objectToSelectOptions(foldersData) {
    const optionsList = [];
    this.getFolders(foldersData, '', optionsList);
    return optionsList;
  }

  getFolders(data, prefix, optionsList) {
    const pref = `${prefix}--`;
    data.children.forEach((item, index) => {
      if(item.children) {
        optionsList.push(<option key={`${item.name}-${index}`} value={item.name}>{pref} {item.name}</option>);
        this.getFolders(item, '--', optionsList);
      }
    });
  }

  updateFolderTree(folder, noteTitle, data) {
    const noteData = {folder, noteTitle};
    const folderData = Object.assign({}, data);
    this.folderLoop(folderData, noteData);
    console.log(1, folderData);
    return folderData;
  }

  folderLoop(data, noteData) {
    data.children.forEach((item) => {
      if(item.name === noteData.folder) {
        item.children = [...item.children, { name: noteData.noteTitle }];
      } else if (item.children && item.name !== noteData.folder) {
        this.folderLoop(item, noteData);
      }
    });
  }

}

export default new newNoteUtils();
