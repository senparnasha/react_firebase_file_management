import * as types from "../actionCreators/actionsTypes/fileFoldersActionTypes";
import fire from "../../config/firebase";

const addFolder = (payload) => ({
  type: types.CREATE_FOLDER,
  payload,
});

export const createFolder = (data) => (dispatch) => {
  fire
    .firestore()
    .collection("folders")
    .add(data)
    .then(async(folder) => {
        const folderData=await (await folder.get()).data()
      dispatch(addFolder(folderData));
      alert("Folder created successfully")
    });
};
