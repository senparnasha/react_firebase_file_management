import React from "react";
import "./ShowItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFolder } from "@fortawesome/free-solid-svg-icons";

const ShowItems = ({ title, items, type }) => {
  return (
    <div className="w-100">
      <h4 className="text-center border-bottom py-2">{title}</h4>
      <div className="row gap-2 p-4 flex-wrap">
        {items.map((item, index) => {
          return (
            <p
              key={index * 55}
              className="col-md-2 py-3 text-center d-flex flex-column border"
            >
              {type === "folder" ? (
                <FontAwesomeIcon icon={faFolder} size="4x" className="mb-3" />
              ) : (
                <FontAwesomeIcon icon={faFileAlt} size="4x" className="mb-3" />
              )}
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ShowItems;
