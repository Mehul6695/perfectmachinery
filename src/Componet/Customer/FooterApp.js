import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterApp() {
  return (
    <div>
        <div className='container-fluid footer text-white'>
          <div className='row'>
            <div className='col-md-6 logosidef'>
        
              <h1 className='ms-4'>Perfect Machinary</h1>
              <p className='mt-2 ms-5'>
             <b>Perfect Machinry</b> is one of the leading firms that is engaged in designing Manufacturing & exeperting as hydraulic system to meet the desired application demands at clients. Creation Hydraulic is dealing in an extensive hydraulic system that have wide Industries.
              </p>
              <h5 className='mt-5 ms-5'>Phone: <span>(+91)9558991020</span></h5> 
              <h5 className='ms-5'>Email <span>meulnakum@6695gmail.com</span></h5> 
         
            </div>
            <div className='col-md-6 p-3 mt-5 text-center'>
              <div className='row'>
                <div className='col-md-6'>
                  <h3>Products</h3>
                  <hr className='w-50 mx-auto border-3'/>
                  <ul className='Productf'>
                    <li><Link to="/hypres" className='text-white' style={{textDecoration:"none"}}>Hydralic Press</Link></li>
                    <li><Link to="/injmol"className='text-white' style={{textDecoration:"none"}}>Injection Moulding </Link></li>
                    <li><Link to="/rubrmc"className='text-white' style={{textDecoration:"none"}}>Rubber Press</Link></li>
                    <li><Link to="/rotrmc"className='text-white' style={{textDecoration:"none"}}>Rotery Machine </Link></li>
                    

                  </ul>
                </div>
                <div className='col-md-6 p-3'>
                <h3>Link</h3>
                <hr className='w-50 mx-auto border-3'/>
                  <ul className='Productf'>
                    <li><Link to="/"className='text-white' style={{textDecoration:"none"}}>Home</Link></li>
                    <li><Link to="/AboutApp"className='text-white' style={{textDecoration:"none"}}>About</Link> </li>
                    <li><Link to="/ContectUsApp"className='text-white' style={{textDecoration:"none"}}>Contect Us</Link></li>
                   
                                      </ul>
                </div>
               
              </div>
            </div>
          </div>

        </div>
        <div className='desinedby text-center mt-2'>
          <p>Desined and Devlope by: <b>Mehul Nakum</b> <span className='ms-5'> copyright@ <Link to='/admin-login' className='text-dark' style={{textDecoration:"none"}}>PerfectMachinery</Link></span></p>
        </div>
    </div>
  )
}
