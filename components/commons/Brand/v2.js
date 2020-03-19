import React from "react";
import styles from "./style.css";
import Item from "../BrandItem/v2";

const Component = ({ data }) => {
  return (
    <div className="brand-container-v2">
      {data.length > 0 &&
        data.map(
          (it, ind) =>
            it.logo && (
              <Item
                key={ind}
                position={ ind % 2 === 0 ? "right" : "left"}
                title={it.name}
                img={it.logo}
              />
            )
        )}
    </div>
  );
};

export default Component;
