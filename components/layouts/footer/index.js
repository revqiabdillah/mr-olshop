import React from "react";
import styles from "./style.css";
import { MENU_FOOTER, SOSMED, NAME_SITE } from "../../../data";

const Component = () => {
  const menu = MENU_FOOTER;
  const date = new Date()
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-menu">
          {menu.map(mn => (
            <a href="#" className="footer-btn-menu">
              {mn.name.toUpperCase()}
            </a>
          ))}
        </div>
        <div className="footer-logo">
          <img src="/assets/img/logo.png" className="footer-logo"></img>
        </div>
        <div className="footer-sosmed">
          {SOSMED.map((sosmed, ind) => (
            <a href="#" className="footer-btn-menu" key={ind}>
              {sosmed.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
          <p className="footer-copyright">
              &copy;{date.getFullYear()} <span className="footer-brand">{NAME_SITE}</span> &nbsp;
              All Right Reserved
          </p>
      </div>
    </div>
  );
};

export default Component;
