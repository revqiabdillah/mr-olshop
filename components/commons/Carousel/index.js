import React, { useState } from "react";
import style from "./style.css";
import { ArrowRightSharp } from "@material-ui/icons";
import { Carousel } from "react-bootstrap";

const Component = ({ data }) => {
  return (
    <Carousel className="slide-container">
      {data.map((cs, index) => (
        <Carousel.Item key={index}>
          <div className="slider-item">
            <div className="header-item">
              <p className="cat-item">Bed Baru</p>
            </div>
            <div className="body-item">
              <div className="title-block">
                <h1 className="title">{cs.title}</h1>
                <p className="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
              <div>
                <img src={cs.imgUri} className="img-slider"></img>
              </div>
            </div>
            <div>
              <a href="#" className="read-more">
                Explore More <ArrowRightSharp />{" "}
              </a>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Component;
