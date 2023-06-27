import { combineReducers } from "redux";

import fileFoldersReducer from "./FileFoldersReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  filefolders: fileFoldersReducer,
});

export default rootReducer;
