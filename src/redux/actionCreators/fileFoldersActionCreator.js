import * as types from "../actionCreators/actionsTypes/fileFoldersActionTypes";
import fire from "../../config/firebase";

const addFolder = (payload) => ({
  type: types.CREATE_FOLDER,
  payload,
});

const addFolders = (payload) => ({
  type: types.ADD_FOLDERS,
  payload,
});

export const createFolder = (data) => (dispatch) => {
  fire
    .firestore()
    .collection("folders")
    .add(data)
    .then(async (folder) => {
      const folderData = await (await folder.get()).data();
      dispatch(addFolder(folderData));
      alert("Folder created successfully");
    });
};

export const getFolders = (userId) => (dispatch) => {
  fire
    .firestore()
    .collection("folders")
    .where("userId", "==", userId)
    .get()
    .then(async(folders)=>{
      const foldersData=await folders.docs.map((folder)=>folder.data());
      dispatch(addFolders(foldersData))
    });
};
