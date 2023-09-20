import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'
import AdminNavApp from '../AdminNavApp'
import AdminSidbarApp from '../AdminSidbarApp'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function UpdateinjtableApp() {
    const Specification=useRef("");
    const unit=useRef("");
    const ton1=useRef("");
    const ton2=useRef("");
    const ton3=useRef("");
    const ton4=useRef("");
    const ton5=useRef("");
    const Navigate = useNavigate("");
    const { id } = useParams();

    useEffect(() => {
        // axios.get(`http://localhost:4000/injtable/${id}`)
        axios.get(`https://perfect-data.onrender.com/injtable/${id}`)
        .then((response) => {
            Specification.current.value = response.data.Specification;
            unit.current.value = response.data.unit;
            ton1.current.value = response.data.ton1;
            ton2.current.value = response.data.ton2;
            ton3.current.value = response.data.ton3;
            ton4.current.value = response.data.ton4;
            ton5.current.value = response.data.ton5;

        });
    }, []);

    const UpdaterowHandler = () => {
        var upd = {
            Specification: Specification.current.value,
            unit:unit .current.value,
            ton1: ton1.current.value,
            ton2: ton2.current.value,
            ton3: ton3.current.value,
            ton4: ton4.current.value,
            ton5: ton5.current.value,

        };


        // axios.put(`http://localhost:4000/injtable/${id}`, upd)
        axios.put(`https://perfect-data.onrender.com/injtable/${id}`, upd)
            .then((response) => {
                Swal.fire({
                    title: 'success',
                    text: 'Row Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                Navigate('/admin-login/manageinjApp');
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
                        <h1>Update Injection Table Row </h1>
                        <div className="container">
                            <div className="col-md-12 mt-2">



                            <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Add Specification *</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" ref={Specification} />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Add  Unit*</label>
                                    <input type="text" className="form-control"  id="exampleFormControlInput1" ref={unit}  />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label text-success"> 90 TON</label>
                                    <input type='text' className="form-control" id="exampleFormControlTextarea1"   ref={ton1} ></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label text-success"> 110 TON</label>
                                    <input type='text' className="form-control" id="exampleFormControlTextarea1"   ref={ton2} ></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label text-success"> 140 TON</label>
                                    <input type='text' className="form-control" id="exampleFormControlTextarea1"  ref={ton3}></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label text-success"> 170 TON</label>
                                    <input type='text' className="form-control" id="exampleFormControlTextarea1"  ref={ton4} ></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label text-success"> 200 TON</label>
                                    <input type='text' className="form-control" id="exampleFormControlTextarea1"   ref={ton5} ></input>
                                </div>


                                <div className="mb-3">
                                    <button type="button" className="btn btn-dark bg-dark text-white btn-lg" id="exampleFormControlInput1" onClick={UpdaterowHandler}>Update Row </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

