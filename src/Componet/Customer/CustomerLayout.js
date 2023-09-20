import React from "react";
import NavbarApp from "../Customer/NavbarApp";
import SliderApp from "./SliderApp";
import AboutsuApp from "./AboutsuApp";
import OurProductApp from "./OurProductApp";
import TestimonialApp from "./TestimonialApp";
import FooterApp from "./FooterApp";


export default function CustomerLayout() {
  return (
    <div>
      <NavbarApp />
      <SliderApp />
      <AboutsuApp />
      <OurProductApp />
      <TestimonialApp />
      <FooterApp />
    
    </div>
  )
}
