const initialState = {
    files: [],
  };
  
  export default function FileReducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_FILE':
        return {
          ...state,
          files: [...state.files, action.payload]
        };
      default:
        return state;
    }
  }
  