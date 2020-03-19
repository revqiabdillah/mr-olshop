import React from "react";
import styles from "./style.css";

const Component = ({ img, title, position = "left" }) => {
  return (
    <div className="brand-container">
      {position === "right" ? (
        <>
          <div className="brand-product">
            <img
              src="https://lottemart.testingnow.me/media/brand/l/o/logo_bir_1.png"
              className="brand-img"
            ></img>
            <span className="brand-span-title">Title</span>
          </div>
          <span className="brand-span-detail">Pnajang Lebar</span>
        </>
      ) : (
        <>
          <span className="brand-span-detail">Pnajang Lebar</span>
          <div className="brand-product">
            <img
              src="https://lottemart.testingnow.me/media/brand/l/o/logo_bir_1.png"
              className="brand-img"
            ></img>
            <span className="brand-span-title">Title</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Component;
