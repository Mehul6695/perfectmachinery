import React from "react";
import {Container,Row,Form} from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function LoginApp() {
  return (
    <div>
      
      <Container className="p-5 mt-5 shadow">
        <Row>
          <div className="col-md-5 p-5  text-white login-img">
            <h6>Login As Admin</h6>
            <hr className="border border-1 w-50 border-white" />
            <img src="https://img1.wsimg.com/isteam/ip/ad9f9611-18da-4adc-8824-90b6c54786d4/492851_admin_256x256.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true" alt="img01" style={{width:"80%"}} />
          </div>
          <div className="col-md-7 p-5">
            <h2>
              Admin Login
              
            </h2>
            <hr className="border border-1 w-50 border-dark" />
            <Form >
              <div className="input-group mt-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Email *"
                  required
                  className="form-control"
                />
              </div>

              <div className="input-group mt-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  required
                  className="form-control"
                />
              </div>

              <div className="input-group mt-2">
                {/*<a href="#">forget Password</a> */}
              </div>

              <div className="input-group mt-2">
               <Link to="/admin-login/adminlayout" >
                <button
                  type="button"
                  name="login"
                  className="btn btn-dark text-white w-100"
                > Login</button></Link>
              </div>
              <div className="input-group mt-2">
                {/* Don't have an account ? <a href="#">create account</a> */}
              </div>
            </Form>
          </div>
        </Row>
     
        </Container>

   
    </div>
  );
}
