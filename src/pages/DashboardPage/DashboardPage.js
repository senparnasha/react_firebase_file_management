import React, { useState } from "react";
import { UseSelector, shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../../components/HomepageComponents/DashboardComponents/Navbar/Navbar";
import SubBar from "../../components/HomepageComponents/DashboardComponents/Navbar/SubBar/SubBar";
import HomeComponent from "../../components/HomepageComponents/DashboardComponents/HomeComponent/HomeComponent";
import CreateFolder from "../../components/HomepageComponents/DashboardComponents/CreateFolder/CreateFolder";
import { getFolders } from "../../redux/actionCreators/fileFoldersActionCreator";
import FolderComponent from "../../components/HomepageComponents/DashboardComponents/FolderComponent/FolderComponent";
import CreateFile from "../../components/HomepageComponents/DashboardComponents/CreateFile/CreateFile";
import { getFiles } from "../../redux/actionCreators/fileFoldersActionCreator";

const DashboardPage = () => {
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [isCreateFileModalOpen, setIsCreateFileModalOpen] = useState(false);

  const {isLoggedIn, isLoading, userId} = useSelector(
    (state) => ({ isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.filefolders.isLoading,
      userId: state.auth.user.uid,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch= useDispatch()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if( isLoading && userId){
      dispatch(getFolders(userId))
      dispatch(getFiles(userId))
    }
  }, [isLoading,userId, dispatch]);

  return (
    <>
      {isCreateFolderModalOpen && (
        <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      )}
      {isCreateFileModalOpen && (
        <CreateFile setIsCreateFileModalOpen={setIsCreateFileModalOpen} />
      )}
      <Navbar />
      <SubBar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}
      setIsCreateFileModalOpen={setIsCreateFileModalOpen} />
      <Routes>
        <Route path="" element={<HomeComponent />}/>
        <Route path="folder/:folderId" element={<FolderComponent/>}/>
      </Routes>
      
    </>
  );
};

export default DashboardPage;
