import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'
import AdminNavApp from '../AdminNavApp'
import AdminSidbarApp from '../AdminSidbarApp'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function UpdateSliderApp() {
    const image = useRef("");
    const title = useRef("");
    const subtitle = useRef("");
    const Navigate = useNavigate("");
    const { id } = useParams();

    useEffect(() => {
        // axios.get(`http://localhost:4000/slider/${id}`)
        axios.get(`https://perfect-data.onrender.com/slider/${id}`)
        .then((response) => {
            image.current.value = response.data.image;
            title.current.value = response.data.title;
            subtitle.current.value = response.data.subtitle;

        });
    }, []);

    const UpdateSliderHandler = () => {
        var upd = {
            image: image.current.value,
            title: title.current.value,
            subtitle: subtitle.current.value

        };


        // axios.put(`http://localhost:4000/slider/${id}`, upd)
        axios.put(`https://perfect-data.onrender.com/slider/${id}`, upd)
            .then((response) => {
                Swal.fire({
                    title: 'success',
                    text: 'Category Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                Navigate('/admin-login/manageslider');
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
                        <h1>Update Slider</h1>
                        <div className="container">
                            <div className="col-md-12 mt-2">



                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Edit Slider Image *</label>
                                    <input type="text" className="form-control" ref={image} id="exampleFormControlInput1" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Edit title *</label>
                                    <input type="text" className="form-control" ref={title} id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label text-success">Edit Sub-Title</label>
                                    <input type='text' className="form-control" id="exampleFormControlTextarea1" ref={subtitle} rows="3"></input>
                                </div>

                                <div className="mb-3">
                                    <button type="button" className="btn btn-dark bg-dark text-white btn-lg" id="exampleFormControlInput1" onClick={UpdateSliderHandler}>UpdateCategory</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
