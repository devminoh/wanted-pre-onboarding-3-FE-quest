import React from "react";
import * as style from "./style.js";

export const SideBar = ({pages, page, setPage}) => {
  const handlePage = (e) => {
    setPage(e.target.innerHTML);
  }
  return (
    <style.SideBarContainer>
        {pages.map((page,idx) => {return(
          <div 
            key={idx}
            onClick={handlePage}
            >
            {page}
          </div>
        )})}
    </style.SideBarContainer>
  );
};
