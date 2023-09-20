import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'
import AdminNavApp from '../AdminNavApp'
import AdminSidbarApp from '../AdminSidbarApp'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function UpdatetestoApp() {
    const testopera = useRef("");
    const testoname = useRef("");
    const Navigate=useNavigate();
       const { id } = useParams();

    useEffect(() => {
        // axios.get(`http://localhost:4000/testo/${id}`)
        axios.get(`https://perfect-data.onrender.com/testo/${id}`)
        .then((response) => {
            testopera.current.value = response.data.testopera;
            testoname.current.value = response.data.testoname;

        });
    }, []);

    const UpdatetestoHandler = () => {
        var upd = {
           testopera: testopera.current.value,
            testoname: testoname.current.value,
            

        };


        // axios.put(`http://localhost:4000/testo/${id}`, upd)
        axios.put(`https://perfect-data.onrender.com/testo/${id}`, upd)
            .then((response) => {
                Swal.fire({
                    title: 'success',
                    text: 'Testomonial  Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                Navigate('/admin-login/managetestoApp');
            });
    }
    return (
        <div>
            <div>
                <AdminNavApp />
                <div className='row admin-main'>
                    <div className='col-md-3'>
                        <AdminSidbarApp />

                    </div>

                    <div className='col-md-8 m-5 '>
                        <h1>Update Testomonial</h1>
                        <div className="container">
                            <div className="col-md-12 mt-2">



                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Edit Testomonial *</label>
                                    <textarea type="text" className="form-control" ref={testopera} id="exampleFormControlInput1" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Edit name*</label>
                                    <input type="text" className="form-control" ref={testoname} id="exampleFormControlInput1" />
                                </div>
                             
                                <div className="mb-3">
                                    <button type="button" className="btn btn-dark bg-dark text-white btn-lg" id="exampleFormControlInput1" onClick={UpdatetestoHandler}>Update Testomonial</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
