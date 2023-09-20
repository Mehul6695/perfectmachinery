import React from "react";
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Slider from "react-slick";


export default function OurProductApp() {
  const [data, setData] = useState([]);
  const Navigate=useNavigate("")
  
  useEffect(() => {
      // axios.get("http://localhost:4000/product")
      axios.get("https://perfect-data.onrender.com/Product")
          .then((response) => {
              setData(response.data)
          });
  }, [data])
  
    const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    speed: 100,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="our-product">
        <div className="blur"></div>

        <div className="container">
          <h2 className="text-center bg-dark text-white rounded-pill w-50 mx-auto mb-5 name">
            Our Products
          </h2>

          <Slider {...settings}>
          {data && data.map((row) => {
      return (
            <div className="img">
              <div className="card ms-2 "  style={{height:"500px"}}>
                <img src={row.prodimage} className="" alt="..."  />
                <div className="card-body">
                  <h5 className="card-title">{row.prodtitle}</h5>
                  <p className="card-text">
                    { row.prodsubtitle}
                  </p>
                  <Link to="/hypres" className="btn btn-dark">
                    View Details 
                  </Link>
                </div>
              </div>
            </div>
              ) })}
   
          </Slider>
        </div>
      </div>
    </div>
  );
}
