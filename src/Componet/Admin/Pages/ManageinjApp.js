import React from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState ,useRef } from 'react'
import AdminNavApp from '../AdminNavApp'
import AdminSidbarApp from '../AdminSidbarApp'
import Swal from 'sweetalert2';
import ManageinjtableApp from './ManageinjtableApp';




export default function ManageinjApp() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate("");
  const injimage=useRef("");
  

  const Addinjimage=()=>{
    var insert={
        injimage:injimage.current.value,
       
        
    }

    // axios.post("http://localhost:4000/injection",insert)
    axios.post("https://perfect-data.onrender.com/injection",insert)
    .then((response) => {
        Swal.fire({
            title: 'success',
            text: 'Image Add successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        Navigate('/admin-login/manageinjApp');
    });
    

    }

  useEffect(() => {
    // axios.get("http://localhost:4000/injection")
    axios.get("https://perfect-data.onrender.com/injection")
      .then((response) => {
        setData(response.data)
      });
  }, [data])

  
  return (
    <div>
      <AdminNavApp />

      <div className='row admin-main'>
        <div className='col-md-3'>
          <AdminSidbarApp />

        </div>
        <div className='col-md-8 mt-5'>
        <button type="button" class="btn btn-danger mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Image
</button>
          <h1>Manage Injection Moulding  Product Slider </h1>
          <table className="table table-hover">
            <thead className='table-dark r text-center' >
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Product Image</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>

              {data && data.map((row) => {

                return (

                  <tr className='text-center '>
                    <th scope="row" key={row.id}>{row.id}</th>
                    <td key={row.injimage}><img src={row.injimage} style={{ width: "85px", height: "85px" }} /></td>
                
                    <td><button type='button'  className='btn' onClick={()=>Navigate(`/admin-login/updateinjApp/${row.id}`)} ><Link to="#"><i className='bi bi-pencil text-success btn' ></i></Link></button>

                    <button type='button'  className='btn' onClick={()=>Navigate(`/admin-login/deleteinjApp/${row.id}`)} ><Link to="#"><i className='bi bi-trash text-danger btn' ></i></Link></button>

                      </td>
                  </tr>
                )

              })}

            </tbody>
          </table>
       <ManageinjtableApp />
          

        </div>
      </div>
     
     {/* Add modal */}



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Injection Moulding Image Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
                            <div className="col-md-12 mt-2">



                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Add Product Image *</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"  ref={injimage}/>
                                </div>

                                
                               

                            </div>
                        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={Addinjimage}>Add Product</button>
      </div>
    </div>
  </div>
  
</div>



    </div>
  )

}
