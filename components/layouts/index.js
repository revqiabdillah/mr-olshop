import React from "react";
import styles from "./style.css";
import Header from "./header";
import Footer from "./footer";

const Component = ({ children, headerColor }) => {
  return (
    <div className="root">
      <Header bgColor={headerColor} />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Component;
