import React from 'react'
import { Link ,NavLink } from 'react-router-dom'


export default function AdminSidbarApp() {
  return (
    <div>
    <div className='sidebar'>
        <div className='sidbar-containe '>
       <div className='w-100 mx-auto ms-5 mb-5'> <Link to='/admin-login/adminlayout'>  <button type='button' className='btn btn-danger w-50 mx-auto'>Dashboard</button></Link></div>

        <ul>
            <li >
                <NavLink to='/admin-login/manageslider'  className="active1">Manage Slider Image</NavLink>
            </li>
            <li>
                <NavLink to='/admin-login/manageProduct'>Manage Our Product Slider</NavLink>
            </li>
            <li>
                <NavLink to='/admin-login/managetestoApp'>Manage Testomonials</NavLink>
            </li>
            <li>
                <NavLink to='/admin-login/mycontect'>My Contects</NavLink>
            </li>
            <li>
                <NavLink to='/admin-login/manageinjApp'>Manage Injection Moulding </NavLink>
            </li>
           
        </ul>
        </div>
    </div>
    </div>
  )
}
