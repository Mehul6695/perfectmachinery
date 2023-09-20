import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavApp() {
  return (
    <div>
         <div>
      
      <nav className="navbar navbar-expand-lg  fixed-top shadow">
        <div className="container-fluid">
          <Link className="navbar-brand w-50 text-white" to="/">
     Welcome: Admin 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link
                  className="nav-link  text-white"
                  aria-current="page"
                  to="/"
                >
                 Logout
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
   
    </div>
    </div>
  )
}
