import React from 'react'

import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState ,useRef } from 'react'
import Swal from 'sweetalert2';

export default function ManageinjtableApp() {
    const [data, setData] = useState([]);
    const Navigate = useNavigate("");
  const Specification=useRef("");
  const unit=useRef("");
  const ton1=useRef("");
  const ton2=useRef("");
  const ton3=useRef("");
  const ton4=useRef("");
  const ton5=useRef("");

  const Addrow=()=>{
    var insert={
        Specification:Specification.current.value,
       unit:unit.current.value,
        ton1:ton1.current.value,
        ton2:ton2.current.value,
        ton3:ton3.current.value,
        ton4:ton4.current.value,
        ton5:ton5.current.value,
        
    }

    // axios.post("http://localhost:4000/injtable",insert)
    axios.post("https://perfect-data.onrender.com/injtable",insert)
    .then((response) => {
        Swal.fire({
            title: 'success',
            text: 'row Add successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        Navigate('/admin-login/manageinjApp');
    });
    

    }

    useEffect(() => {
        // axios.get("http://localhost:4000/injtable")
        axios.get("https://perfect-data.onrender.com/injtable")
          .then((response) => {
            setData(response.data)
          });
      }, [data])
  return (
    <div>
       <h3>Manage Injection Moulding  Table </h3>
        <button type="button" class="btn btn-danger mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Add Table Row
</button>
        <div className='container table-responsive m-5'>
      
      <table class="table table-hover text-center">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Unit</th>
      <th scope="col">90 TON</th>
      <th scope="col">110 TON</th>
      <th scope="col">140 TON</th>
      <th scope="col">170 TON</th>
      <th scope="col">200 TON</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  {data && data.map((row) => {

return (
    <tr>
      <th scope="row">{row.Specification}</th>
      <td>{row.unit}</td>
      <td>{row.ton1}</td>
      <td>{row.ton2}</td>
      <td>{row.ton3}</td>
      <td>{row.ton4}</td>
      <td>{row.ton5}</td>
      <td><button type='button'  className='btn' onClick={()=>Navigate(`/admin-login/updateinjtableApp/${row.id}`)} ><Link to="#"><i className='bi bi-pencil text-success btn' ></i></Link></button>

                    <button type='button'  className='btn' onClick={()=>Navigate(`/admin-login/DeleteinjtableApp/${row.id}`)} ><Link to="#"><i className='bi bi-trash text-danger btn' ></i></Link></button>

                      </td>
    </tr>
)
       })}
    </tbody>
    </table>
    </div>
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Tabel row </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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

                               

                            </div>
                        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={Addrow} >Add Detail Row</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
