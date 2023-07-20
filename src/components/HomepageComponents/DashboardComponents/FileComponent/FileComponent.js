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
        <>
          <h1 className="display-1 my-5 text-center  ">
            Uploaded files preview coming soon{" "}
          </h1>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </>
      )}
    </>
  );
};

export default FileComponent;
