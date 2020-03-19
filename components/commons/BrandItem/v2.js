import React from "react";
import styles from "./style.css";

const Component = ({ img, title, position = "left" }) => {
  console.log(position);
  return (
   <div style={{ width: 300, height : 300, background : "#ff0000" }}>
        ad
   </div>
  );
};

export default Component;
