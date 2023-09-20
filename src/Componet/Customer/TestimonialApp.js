import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollTrigger from "react-scroll-trigger";


export default function TestimonialApp() {
  const [counteron, setcounterOn] = useState(false);
  const [data, setData] = useState([]);
  const Navigate=useNavigate("")
  
  useEffect(() => {
      // axios.get("http://localhost:4000/testo")
      axios.get("https://perfect-data.onrender.com/testo")
          .then((response) => {
              setData(response.data)
          });
  }, [data])
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
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
      <div className="container wow bounceIn">
        <h2 className="text-center mt-5"> Testimonial </h2>
        <hr className="border-1 border-dark w-25 mx-auto" />
        <Slider {...settings}>
        {data && data.map((row) => {
      return (
          <div className="testomonial text-center p-5 text-white">
            <h5>{row.testopera}</h5>
            <p className="mt-5">{row.testoname}</p>
          </div>
          ) })}
        </Slider>
      </div>

      <div className="row flex mt-5">
      

        <div className="col-md-3">
          <h1><ScrollTrigger   onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(true)}><span className="counter">{counteron && <CountUp start={0} end={100} duration={10} delay={2} />}</span><span className="counter-per">+</span></ScrollTrigger></h1>
           <h5>Total Exports</h5>
        </div>
        <div className="col-md-3">
        <h1><ScrollTrigger   onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(true)}><span className="counter">{counteron && <CountUp start={0} end={500} duration={10} delay={1} />}</span><span className="counter-per">+</span></ScrollTrigger></h1>
           <h5>Happy Client </h5>
          </div>
        <div className="col-md-3">
        <h1><ScrollTrigger   onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(true)}><span className="counter">{counteron && <CountUp start={0} end={25} duration={10} delay={1} />}</span><span className="counter-per">+</span></ScrollTrigger></h1>
           <h5>Expriance</h5>
        </div>
      </div>
    </div>
    
   
    
  );
}
