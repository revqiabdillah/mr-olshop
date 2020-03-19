import React from "react";
import styles from "./style.css";
import Header from "./header";
import Footer from "./footer";
import { Grid } from "@material-ui/core";

const Component = ({ children, headerColor }) => {
  return (
    <div className="root">
      <Grid container spacing={0}>
        <Grid item sm={12} md={12} lg={12} container justify="center">
          <Header bgColor={headerColor} />
        </Grid>
        <Grid item sm={12} md={12} lg={12} container justify="center">
          {children}
        </Grid>
        <Grid item sm={12} md={12} lg={12} container justify="center">
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Component;
