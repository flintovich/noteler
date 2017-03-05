import { MAIN_FOLDER } from '../constants';

const initialState = {
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

    case 'UPDATE_FOLDERS_TREE': {
      return {
        ...state,
        categories: [...action.dataList]
      };
    }

    default: {
      return state;
    }
  }
}