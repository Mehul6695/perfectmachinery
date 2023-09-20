import React from 'react';
import axios from 'axios';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';
import contimg from '../image/contectimg.png';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com'


export default function ContectUsApp() {
    const SERVICE_ID = "service_emnr3if";
    const TEMPLATE_ID = "template_30lymta";
    const PUBLIC_KEY = "OGmrr2jB5ti4ylpmH";

    const name=useRef("");
    const email=useRef("");
    const subject=useRef("");
    const phone=useRef("");
    const massage=useRef("");
    const Navigate=useNavigate("");
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
    };

    const Addcontect=()=>{
        var insert={
            name:name.current.value,
            email:email.current.value,
            subject:subject.current.value,
            phone:phone.current.value,
            email:email.current.value,
            massage:massage.current.value,
        }

        // axios.post("http://localhost:4000/contects",insert)
        axios.post("https://perfect-data.onrender.com/contects",insert)
        
  
        }
    

    return (
        <div>
            <NavbarApp />
            <h1 className='contect-text container'>Contect Us</h1>
            <div className='row container'>
                <div className='col-md-8 p-5'>
                    <form className='row g-3' onSubmit={handleOnSubmit}>
                    {/* <form className='row g-3' > */}
                        <div className='col-md-6'>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" ref={name} name="name" required />
                                <label for="floatingInput">Enter Name</label>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" ref={email} required  name="email"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" ref={subject}required  name='sub'/>
                                <label for="floatingInput">Enter Subject </label>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" ref={phone}  name='phone'/>
                                <label for="floatingInput">Enter Phone</label>
                            </div>
                        </div>

                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ref={massage}required name='msg'></textarea>
                            <label for="floatingTextarea">Message</label>
                        </div>
                        <button type="submit" class="btn btn-primary w-25" onClick={Addcontect}>Send</button>
                    </form>
                </div>
                <div className='col-md-4'>
                    <div className='about-img'>
                        <img src={contimg} alt='about_img' style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
            <div className='container social-media mt-5 '>
                <div className='row  ms-5'>
                    <div className='col-md-4 text-center'>
                    <i class="bi bi-envelope-at "></i>
                        <p className='text-contect'>Email</p>
                       <Link to = "mailto: mehulnakum6695@gmail.com" className='email' >mehulnakum6695@gmail.com</Link>
                    </div>
                  
                    <div className='col-md-4 text-center'>
                    <i class="bi bi-telephone-fill "></i>
                        <p className='text-contect'>Phone</p>
                        <p className='text-contect'>(+91)955 899 1020</p>
                 
                    </div>
                  
                    <div className='col-md-4 text-center'>
                    <i class="bi bi-geo-alt-fill "></i>
                        <p className='text-contect'> Address</p>
                        <p className='text-contect'>150 Feet, Ring Road , Punit Nagar, Rajkot-360004</p>
                   
                    </div>
                </div>
            </div>
            
            <FooterApp />
            
        </div>
    )
}
