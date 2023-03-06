import React from "react";
import * as style from "./style.js";
import { ContentA } from "./Contents/contentA.js";
import { ContentB } from "./Contents/contentB.js";
import { ContentC } from "./Contents/contentC.js";

export const Content = ({ page }) => {
  const pageContent = {
    'Page A': <ContentA />,
    'Page B': <ContentB />,
    'Page C': <ContentC />
  }

  return (
    <style.ContentContainer>
      {Object.entries(pageContent).map(([key, value]) => {
        if(key === page){
          return(value);
        }
      })}
    </style.ContentContainer>
  );
};
