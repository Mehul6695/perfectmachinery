import React from 'react';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';
import npimg from "../image/pagenf.gif";
import { Link } from 'react-router-dom';


export default function PagenotFApp() {
  return (
    <div>
        <NavbarApp />
    <div className='pagenf'>
        <center>
        <Link to="/"><img src={npimg} alt='nfimg'  style={{width:'60%'}}/> </Link>
        </center>
    </div>
        <FooterApp />
    </div>
  )
}
