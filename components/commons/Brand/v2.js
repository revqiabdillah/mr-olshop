import React from "react";
import styles from "./style.css";
import Item from '../BrandItem/v2'

const Component = ({ data }) => {
  return (
    <div className="brand-container">
      {
        data.length > 0 && data.map((it, ind) => it.logo && (
          <Item key={ind} />
        ) )
      }
    </div>
  );
};

export default Component;
