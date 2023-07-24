import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import CodeEditor from "./CodeEditor";

const FileComponent = () => {
  const { fileId } = useParams();
  const [fileData, setFileData] = useState("");
  const [prevFileData, setPrevFileData] = useState("");
  const navigate = useNavigate();

  const { currentFile } = useSelector(
    (state) => ({
      currentFile: state.filefolders.userFiles.find(
        (file) => file.docId === fileId
      ),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (currentFile) {
      setFileData(currentFile.data.data);
      setPrevFileData(currentFile.data.data);
    }
  }, [currentFile, currentFile.data.data]);

  return (
    <>
      {fileData !== null ? (
        <>
          <Header
            fileName={currentFile.data.name}
            fileData={fileData}
            prevFileData={prevFileData}
            fileId={fileId}
          />
          <CodeEditor
            fileName={currentFile.data.name}
            data={fileData}
            setData={setFileData}
          />
        </>
      ) : (
        <div className="position-fixed w-100 h-100 left-0 top-0 bg-dark text-light">
          <div className="d-flex py-4 px-5 mt-4 justify-content-between align-items-center">
            <p title={currentFile.data.name} className="my-0">
              {currentFile.data.name.length > 40
                ? currentFile.data.name.slice(0, 40) +
                  "... ." +
                  currentFile.data.extension
                : currentFile.data.name}
            </p>
            <div className="d-flex align-items-center me-5 ">
              <button
                className="btn btn-sm btn-outline-light me-2"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
              <button className="btn btn-sm btn-primary">Download</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileComponent;
