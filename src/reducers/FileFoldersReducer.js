import * as types from "../redux/actionCreators/actionsTypes/fileFoldersActionTypes"

const initialState = {
  isLoading: false,
  currentFolder: "root",
  userFolders: [],
  userFiles: [],
  adminFolders: [],
  adminFiles: [],
};

const fileFoldersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FOLDER:
      return{
        ...state,
        userFolders:[...state.userFolders,action.payload],
      };

    default:
      return state;
  }
};

export default fileFoldersReducer;
