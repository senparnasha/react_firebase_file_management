import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


import {
  faFileUpload,
  faFileAlt,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./SubBar.css";

const SubBar = ({ setIsCreateFolderModalOpen }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white  py-2 px-5">
        <nav className="ms-5"  aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Root</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              New Folder
            </li>
          </ol>
        </nav>
       
        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item mx-2 ">
            <button className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload Files
            </button>
          </li>
          <li className="nav-item mx-2">
            <button className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create File
            </button>
          </li>
          <li className="nav-item ms-2">
            <button
              className="btn btn-outline-dark"
              onClick={() => setIsCreateFolderModalOpen(true)}
            >
              <FontAwesomeIcon icon={faFolderPlus} /> &nbsp;Create Folder
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SubBar;
