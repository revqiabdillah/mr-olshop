import React from "react";
import { ShoppingBasket, People, Menu } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import classNames from "classnames";
import styles from "./style.css";
import { NAME_SITE } from "../../../data";

const Component = ({ style, bgColor }) => {
  const containerStyle = style
    ? classNames([style, "header-container"])
    : "header-container";
  return (
    <div className={containerStyle} style={{ backgroundColor : bgColor }}>
      <a href="#" className="header-menu-btn">
        <Menu  className="header-icon" />
      </a>
      <span className="header-logo">{NAME_SITE}</span>
      <div className="header-right">
        <a href="#">
          <Badge badgeContent={5} color="secondary">
            <ShoppingBasket className="header-icon" />
          </Badge>
        </a>
        <a href="#">
          <People className="header-icon" />
        </a>
      </div>
    </div>
  );
};

export default Component;
