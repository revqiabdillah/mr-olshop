import React from "react";
import styles from "./style.css";

const Component = ({ img, title, position = "left" }) => {
  console.log(position);
  return (
    <>
      {position === "right" ? (
        <div className="item-brand-container-right">
          <div className="brand-product">
            <img src={img} className="brand-img"></img>
            <span className="brand-span-title">{title}</span>
          </div>
          {/* <span className="brand-span-detail-right">Pnajang Lebar</span> */}
        </div>
      ) : (
        <div className="item-brand-container">
          <div className="brand-product">
            <img src={img} className="brand-img"></img>
            <span className="brand-span-title">{title}</span>
          </div>
          {/* <span className="brand-span-detail-right">Pnajang Lebar</span> */}
        </div>
      )}
    </>
  );
};

export default Component;
