import React from "react";
import Slider from "react-slick";
import Rapids from "./Rapids";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Project.css";
  

function AllProjects() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    
    <div className="container">
          <Slider {...settings}>
      
      <div className="project__container container grid">
        <Rapids />
      </div>
      <div className="project__container container grid">
        <Rapids />
      </div>
      <div className="project__container container grid">
        <Rapids />
      </div>
    </Slider>
    </div>
  
  );
}
export default AllProjects;
