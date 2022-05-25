import React, { Component } from "react";
import Slider from "react-slick";
import p1 from "../imgs/pause1.jpg"
import p2 from "../imgs/pause2.jpg"
import p3 from "../imgs/pause3.jpg"
import p4 from "../imgs/pause4.jpg"
import p5 from "../imgs/pause5.jpg"
import p6 from "../imgs/pause6.jpg"
export default class VariableWidth extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true
    };
    return (
      <div className="container">
        <h1 className="pause">Featured Brands</h1>
        <Slider {...settings}>
          <div style={{ width: 160 }}>
          <img src={p1}/>
          </div>
          <div style={{ width: 160 }}>
          <img src={p2}/>
          </div>
          <div style={{ width: 160 }}>
          <img src={p3}/>
          </div>
          <div style={{ width: 160 }}>
          <img src={p4}/>
          </div>
          <div style={{ width: 160 }}>
          <img src={p5}/>
          </div>
          <div style={{ width: 160 }}>
          <img src={p6}/>
          </div>
        </Slider>
      </div>
    );
  }
}