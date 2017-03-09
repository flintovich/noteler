import { MAIN_FOLDER } from '../constants';
import newNoteUtils from '../utils/newNote'

const initialState = JSON.parse(localStorage.getItem('foldersTree')) || {
  categories: [{
    name: MAIN_FOLDER,
    toggled: true,
    children: []
  }]
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CATEGORY': {
      const newCategory = {
        title: action.title,
        id: action.title.toLowerCase()
      };

      return {
        ...state,
        categories: [...state.categories, newCategory]
      };
    }

    case 'REMOVE_FILE_FROM_TREE': {
      const newDataForTree = {
        ...state,
        categories: [...newNoteUtils.removeFileFromTree(state.categories, action.id)]
      };

      localStorage.setItem('foldersTree', JSON.stringify(newDataForTree));
      return newDataForTree;
    }

    case 'UPDATE_FOLDERS_TREE': {
      const newFoldersTree = {
        ...state,
        categories: [...action.dataList]
      };

      localStorage.setItem('foldersTree', JSON.stringify(newFoldersTree));
      return newFoldersTree;
    }

    default: {
      return state;
    }
  }
}