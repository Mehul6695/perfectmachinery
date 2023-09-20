import axios from 'axios'
import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AdminNavApp from '../AdminNavApp'
import AdminSidbarApp from '../AdminSidbarApp'


export default function MyContectApp() {
    // get data
    const [data, setData] = useState([]);
    const Navigate=useNavigate("")
    
    useEffect(() => {
        // axios.get("http://localhost:4000/contects")
        axios.get("https://perfect-data.onrender.com/contects")
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

                <div className='col-md-8 mt-5 table-responsive  '>
            <h1>My Contects</h1>

                    <table className="table table-hover">
                        <thead className='table-dark r text-center' >
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">email</th>
                                <th scope="col">subject</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">message</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data && data.map((row) => {

                                return (

                                    <tr className='text-center '>
                                        <th scope="row" key={row.id}>{row.id}</th>
                                        <td key={row.name}>{row.name}</td>
                                        <td key={row.email}>{row.email}</td>
                                        <td key={row.subject}>{row.subject}</td>
                                        <td key={row.phone}>{row.phone}</td>
                                        <td key={row.massage}>{row.massage}</td>
                                        <td colSpan={2}><div style={{ width: "100px" }}><Link to="#"><i className='bi bi-whatsapp text-success btn'></i></Link>
                                        
        <button type="button" className='btn btn-sm '  onClick={()=>Navigate(`/admin-login/deletApp/${row.id}`)}><i className='bi bi-trash text-danger'></i> </button></div></td>
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
