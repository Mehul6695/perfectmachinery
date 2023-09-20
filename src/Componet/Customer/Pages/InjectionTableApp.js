import React from 'react'

import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState ,useRef } from 'react'
import Swal from 'sweetalert2';

export default function InjectionTableApp() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // axios.get("http://localhost:4000/injtable")
        axios.get("https://perfect-data.onrender.com/injtable")
          .then((response) => {
            setData(response.data)
          });
      }, [data])
  return (
    <div>
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
    </tr>
)
       })}
    </tbody>
    </table>
    </div>
    </div>
  )
}
