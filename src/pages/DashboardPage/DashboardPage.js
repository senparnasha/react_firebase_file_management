import React, { useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/HomepageComponents/DashboardComponents/Navbar/Navbar";
import SubBar from "../../components/HomepageComponents/DashboardComponents/Navbar/SubBar/SubBar";
import HomeComponent from "../../components/HomepageComponents/DashboardComponents/HomeComponent/HomeComponent";
import CreateFolder from "../../components/HomepageComponents/DashboardComponents/CreateFolder/CreateFolder";

const DashboardPage = () => {
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {isCreateFolderModalOpen && (
        <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      )}
      <Navbar />
      <SubBar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      <HomeComponent />
    </>
  );
};

export default DashboardPage;
