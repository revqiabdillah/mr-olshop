import React from "react";
import styles from "./style.css";
import Item from '../BrandItem'

const Component = ({ data }) => {
  return (
    <div className="brand-container">
      {
        data.length > 0 && data.map((it, ind) => it.logo && (
          <Item key={ind} img={it.logo} title={it.name} position={ind % 2 == 0 ? 'left' : "right"} />
        ) )
      }
    </div>
  );
};

export default Component;
