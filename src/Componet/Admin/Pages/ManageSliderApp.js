import React from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AdminNavApp from '../AdminNavApp'
import AdminSidbarApp from '../AdminSidbarApp'

export default function ManageSliderApp() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate("")

  useEffect(() => {
    // axios.get("http://localhost:4000/slider")
    axios.get("https://perfect-data.onrender.com/slider")
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

          <h1>Manage Slider </h1>
          <table className="table table-hover">
            <thead className='table-dark r text-center' >
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Slider Image</th>
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
                    <td key={row.image}><img src={row.image} style={{ width: "85px", height: "85px" }} /></td>
                    <td key={row.title}>{row.title}</td>
                    <td key={row.subtitle}>{row.subtitle}</td>

                    <td><button type='button'  className='btn' onClick={()=>Navigate(`/admin-login/updateSliderApp/${row.id}`)} ><Link to="#"><i className='bi bi-pencil text-success btn' ></i></Link></button>

                      </td>
                  </tr>
                )

              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
