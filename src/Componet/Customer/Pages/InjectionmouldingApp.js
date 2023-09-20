import React from 'react';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import InjectionTableApp from './InjectionTableApp';







export default function InjectionmouldingApp() {
  const [data, setData] = useState([]);
  const Navigate=useNavigate("")
  
  useEffect(() => {
      // axios.get("http://localhost:4000/injection")
      axios.get("https://perfect-data.onrender.com/injection")
          .then((response) => {
              setData(response.data)
          });
  }, [data])
  return (
    <div >
      <NavbarApp />
   
     
              <h1 className='hyprestext container'>Injection Moulding Machine configurations</h1>
             

            
      <div className='hypressimg container'>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
      {data && data.map((row) => {
      return (
        <div class="carousel-item injmc active">
          <img src={row.injimage} class="d-block w-100" alt="..."  style={{width:"50%"}}/>
            <div class="carousel-caption d-none d-md-block">
            
          </div>
        </div>
           ) })}
      
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
      </div>
     <InjectionTableApp />
      <FooterApp />
    </div>
  )
}
