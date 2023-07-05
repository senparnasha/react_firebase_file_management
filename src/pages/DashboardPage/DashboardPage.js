import React, { useState } from "react";
import {
  UseSelector,
  shallowEqual,
  useDispatch,
  useSelector,
} from "react-redux";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/HomepageComponents/DashboardComponents/Navbar/Navbar";
import SubBar from "../../components/HomepageComponents/DashboardComponents/Navbar/SubBar/SubBar";
import HomeComponent from "../../components/HomepageComponents/DashboardComponents/HomeComponent/HomeComponent";
import CreateFolder from "../../components/HomepageComponents/DashboardComponents/CreateFolder/CreateFolder";
import { getFolders } from "../../redux/actionCreators/fileFoldersActionCreator";
import FolderComponent from "../../components/HomepageComponents/DashboardComponents/FolderComponent/FolderComponent";
import CreateFile from "../../components/HomepageComponents/DashboardComponents/CreateFile/CreateFile";
import { getFiles } from "../../redux/actionCreators/fileFoldersActionCreator";
import FileComponent from "../../components/HomepageComponents/DashboardComponents/FileComponent/FileComponent";

const DashboardPage = () => {
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [isCreateFileModalOpen, setIsCreateFileModalOpen] = useState(false);
  const [showSubBar, setShowSubBar] = useState(true);
  const {pathname}= useLocation()

  const { isLoggedIn, isLoading, userId } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.filefolders.isLoading,
      userId: state.auth.user.uid,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));
      dispatch(getFiles(userId));
    }
  }, [isLoading, userId, dispatch]);

  useEffect(() => {
    if (pathname.includes("/file/")) {
      console.log("pathname",pathname)
      setShowSubBar(false);
    }
    console.log("working")
  }, [pathname]);

  return (
    <>
      {isCreateFolderModalOpen && (
        <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      )}
      {isCreateFileModalOpen && (
        <CreateFile setIsCreateFileModalOpen={setIsCreateFileModalOpen} />
      )}
      <Navbar />
      {showSubBar && (
        <SubBar
          setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}
          setIsCreateFileModalOpen={setIsCreateFileModalOpen}
        />
      )}

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
        <Route path="file/:fileId" element={<FileComponent />} />
      </Routes>
    </>
  );
};

export default DashboardPage;
