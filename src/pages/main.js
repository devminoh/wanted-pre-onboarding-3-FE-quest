import React, { useState } from "react";
import { SideBar } from "../components/sidebar.js";
import { ContentA } from "../components/Contents/contentA.js";
import * as style from "./style.js";

export const Main = () => {
  const pages = ["Page A", "Page B", "Page C"];
  const [page, setPage] = useState('Page A');
  
  return (
    <style.MainContainer>
      <SideBar pages={pages} page={page} setPage={setPage} />
      <ContentA />
    </style.MainContainer>
  );
};
