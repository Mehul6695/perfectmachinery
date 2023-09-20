import React from 'react'
import aboutimg from '../Customer/image/aboutimg.png';
import { Link } from 'react-router-dom';

export default function AboutsuApp() {
  return (
    <div>
         
        <hr className='border-1'/>
      
        <div className='container'>
        <div className='row mt-5'>
            <div className='col-md-8'>
                <h2>About Perfect Machinery</h2>
                <p align="justify"><b>Perfect Machinery</b> are a dependable and famous manufacturer of a broad range of Hydraulic Press,  Power Press Machines and Injection Moulding Machines. We are a Sole Proprietorship company, which is located in Rajkot (Gujarat, India).</p>

                <p align="justify">We provide these products in diverse specifications to attain the complete satisfaction of the clients. Further, our strong logistic support makes sure that these products are delivered within the promised time-frame. Under the supervision of Mr. Mehul Nakum, we have gained huge clientele in our country.</p>
            </div>
            <div className='col-md-4'>
            
               <div className='aboutimg'>
                <img src={aboutimg} alt='aboutimg'  style={{width:"100%"}}/>
               </div>
            </div>
        </div>
        <Link to="/AboutApp"><button type='button' className='btn btn-dark text-white mt-5 rounded-pill'>Read More </button></Link>
        
        </div>
       
    </div>
  )
}
