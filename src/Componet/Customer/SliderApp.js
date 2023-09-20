import React from 'react';
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'




export default function SliderApp() {
  const [data, setData] = useState([]);
  const Navigate=useNavigate("")
  
  useEffect(() => {
      // axios.get("http://localhost:4000/slider")
      axios.get("https://perfect-data.onrender.com/slider")
          .then((response) => {
              setData(response.data)
          });
  }, [data])
  return (
    <div>
      
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
   
  </div>
  <div class="carousel-inner">
  {data && data.map((row) => {
      return (

        <div class="carousel-item active">
        <img src={row.image} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
          <h5>{row.title}</h5>
          <p>{row.subtitle}</p>
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
  )
}
