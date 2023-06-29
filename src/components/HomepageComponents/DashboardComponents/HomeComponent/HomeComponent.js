import React from "react";
import ShowItems from "../ShowItems/ShowItems";
import { shallowEqual, useSelector } from "react-redux";

const HomeComponent = () => {
  const folders = ["New folder", "new folder 2"];
  const files = ["New ffile", "new file 2"];

  const { isLoading, userFolders } = useSelector(
    (state) => ({
      isLoading: state.filefolders.isLoading,
      userFolders: state.filefolders.userfolders,
    }),
    shallowEqual
  );

  return (
    <div className="col-md-12 w-100">
      {isLoading ? (
        <h1 className="display-1 my-5 text-center">Loading...</h1>
      ) : (
        <>
          <ShowItems title={"Created Folders"} items={folders} />
          <ShowItems title={"Created Files"} items={files} />
        </>
      )}
    </div>
  );
};

export default HomeComponent;
