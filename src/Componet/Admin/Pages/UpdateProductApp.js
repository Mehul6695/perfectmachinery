import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'
import AdminNavApp from '../AdminNavApp'
import AdminSidbarApp from '../AdminSidbarApp'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function UpdateProductApp() {
    const prodimage = useRef("");
    const prodtitle = useRef("");
    const prodsubtitle = useRef("");
    const Navigate = useNavigate("");
    const { id } = useParams();

    useEffect(() => {
        // axios.get(`http://localhost:4000/Product/${id}`)
        axios.get(`https://perfect-data.onrender.com/Product/${id}`)
        .then((response) => {
            prodimage.current.value = response.data.prodimage;
            prodtitle.current.value = response.data.prodtitle;
            prodsubtitle.current.value = response.data.prodsubtitle;

        });
    }, []);

    const UpdateproductHandler = () => {
        var upd = {
            prodimage: prodimage.current.value,
            prodtitle: prodtitle.current.value,
            prodsubtitle: prodsubtitle.current.value

        };


        // axios.put(`http://localhost:4000/Product/${id}`, upd)
        axios.put(`https://perfect-data.onrender.com/Product/${id}`, upd)
            .then((response) => {
                Swal.fire({
                    title: 'success',
                    text: 'Category Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                Navigate('/admin-login/manageproduct');
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
                        <h1>Update Product</h1>
                        <div className="container">
                            <div className="col-md-12 mt-2">



                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Edit Slider Image *</label>
                                    <input type="text" className="form-control" ref={prodimage} id="exampleFormControlInput1" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Edit title *</label>
                                    <input type="text" className="form-control" ref={prodtitle} id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label text-success">Edit Sub-Title</label>
                                    <input type='text' className="form-control" id="exampleFormControlTextarea1" ref={prodsubtitle} rows="3"></input>
                                </div>

                                <div className="mb-3">
                                    <button type="button" className="btn btn-dark bg-dark text-white btn-lg" id="exampleFormControlInput1" onClick={UpdateproductHandler}>Update Product</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
