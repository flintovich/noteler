const initialState = {
  categories: {
    name: 'Main Folder',
    toggled: true,
    children: [
      {
        name: 'folder 1',
        children: [
          {
            name: 'child1',
          }
        ]
      },
      {
        name: 'Luxoft',
        children: [
          {
            name: 'work specs',
            children: [
              {
                name: 'MCPM',
                children: [
                  {
                    name: 'spec 1'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Links to videos',
        children: [
          {
            name: 'vk',
            children: [
              {
                name: 'http://anekdotu.info',
              }
            ]
          },
          {
            name: 'youtube',
            children: []
          },
        ]
      }
    ]
  }
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
        categories: {...action.dataList}
      };
    }

    default: {
      return state;
    }
  }
}