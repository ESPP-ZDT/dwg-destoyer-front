const initialState = {
  files: [],
  currentFile: null
};

export default function FileReducer(state = initialState, action) {
  switch (action.type) {
      case 'CREATE_FILE':
          return {
              ...state,
              files: [...state.files, action.payload]
          };
      case 'GET_FILE':
          return {
              ...state,
              currentFile: action.payload
          };
      default:
          return state;
  }
}
