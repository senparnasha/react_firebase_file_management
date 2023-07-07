import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import CodeEditor from "./CodeEditor";

const FileComponent = () => {
  const { fileId } = useParams();
  const [fileData, setFileData] = useState("");

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
    }
  }, [currentFile]);

  return (
    <>
      <Header
        fileName={currentFile.data.name}
        fileData={fileData}
        prevFileData={currentFile.data.data}
      />
      <CodeEditor
        fileName={currentFile.data.name}
        data={fileData}
        setData={setFileData}
      />
    </>
  );
};

export default FileComponent;
