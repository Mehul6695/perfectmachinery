import React from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState ,useRef } from 'react'
import AdminNavApp from '../AdminNavApp'
import AdminSidbarApp from '../AdminSidbarApp'
import Swal from 'sweetalert2';

export default function ManageProductApp() {

  
  const [data, setData] = useState([]);
  const Navigate = useNavigate("");
  const prodimage=useRef("");
  const prodtitle=useRef("");
  const prodsubtitle=useRef("");

  const Addproduct=()=>{
    var insert={
        prodimage:prodimage.current.value,
        prodtitle:prodtitle.current.value,
        prodsubtitle:prodsubtitle.current.value,
        
    }

    // axios.post("http://localhost:4000/product",insert)
    axios.post("https://perfect-data.onrender.com/Product",insert)
    .then((response) => {
        Swal.fire({
            title: 'success',
            text: 'Product Add successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        Navigate('/admin-login/manageproduct');
    });
    

    }

  useEffect(() => {
    // axios.get("http://localhost:4000/Product")
    axios.get("https://perfect-data.onrender.com/Product")
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
  Add Product
</button>
          <h1>Manage Product Slider </h1>
          <table className="table table-hover">
            <thead className='table-dark r text-center' >
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Product Image</th>
                <th scope="col">Title</th>
                <th scope="col">Sub-Title</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>

              {data && data.map((row) => {

                return (

                  <tr className='text-center '>
                    <th scope="row" key={row.id}>{row.id}</th>
                    <td key={row.prodimage}><img src={row.prodimage} style={{ width: "85px", height: "85px" }} /></td>
                    <td key={row.prodtitle}>{row.prodtitle}</td>
                    <td key={row.prodsubtitle}>{row.prodsubtitle}</td>

                    <td><button type='button'  className='btn' onClick={()=>Navigate(`/admin-login/updateProductApp/${row.id}`)} ><Link to="#"><i className='bi bi-pencil text-success btn' ></i></Link></button>

                    <button type='button'  className='btn' onClick={()=>Navigate(`/admin-login/DeletproductApp/${row.id}`)} ><Link to="#"><i className='bi bi-trash text-danger btn' ></i></Link></button>

                      </td>
                  </tr>
                )

              })}

            </tbody>
          </table>
        </div>
      </div>
     {/* Add modal */}



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
                            <div className="col-md-12 mt-2">



                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Add Product Image *</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"  ref={prodimage}/>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-success">Add  title *</label>
                                    <input type="text" className="form-control"  id="exampleFormControlInput1" ref={prodtitle} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label text-success"> Add Sub-Title</label>
                                    <input type='text' className="form-control" id="exampleFormControlTextarea1"  rows="3" ref={prodsubtitle}></input>
                                </div>

                               

                            </div>
                        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={Addproduct}>Add Product</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
