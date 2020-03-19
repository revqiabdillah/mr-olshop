import React from "react";
import styles from "./style.css";

const Component = ({ img, title, position = "left" }) => {
  console.log(position);
  return (
    <>
      {position === "right" ? (
        <div className="brand-item-v2">
          <div className="brand-container-item-v2">
            <div className="body-brand-item-ve">
                
            </div>
            <span className="span-disc-v2">Disc 20%</span>
          </div>
          <div className="div-space"></div>
        </div>
      ) : (
        <div className="brand-item-v2">
          <div className="div-space"></div>
          <div className="brand-container-item-v2">
            <div className="body-brand-item-ve"></div>
            <span className="span-disc-v2">Disc 20%</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Component;
