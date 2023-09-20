import React from 'react'
import {Container} from 'react-bootstrap';


export default function AdminDashbordApp() {
  return (
    <div >
    <Container>
       
        <div className="col-md-12 mt-2">
        <h3>Welcome to Dashboard</h3>
        <div className="row text-center">
       <div className='col-md-3 m-2 bg-danger p-4'>
       <h5 className='text-white'>Slider Image </h5>
       <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-white text-dark'>6</span></h2>
       </div>

       <div className='col-md-3 m-2 bg-primary p-4'>
       <h5 className='text-white'>Total Contacts </h5>
       <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-white text-dark'>10</span></h2>
       </div>     

       <div className='col-md-3  m-2 bg-success p-4 shadow'>
       <h5 className='text-dark'>Injection moulding Product </h5>
       <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-danger text-dark'>3</span></h2>
       </div>     



       <div className='col-md-3  m-2 bg-info p-4 shadow'>
       <h5 className='text-dark'>Hydralic Press Product  </h5>
       <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-danger text-dark'>2</span></h2>
       </div> 

       <div className='col-md-3  m-2 bg-info p-4 shadow'>
       <h5 className='text-dark'>Rubber Moulding Product  </h5>
       <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-danger text-dark'>2</span></h2>
       </div>   
       
         <div className='col-md-3  m-2 bg-info p-4 shadow'>
       <h5 className='text-dark'>Rotery Machine  Product   </h5>
       <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-danger text-dark'>2</span></h2>
       </div>   


        </div>
</div>

</Container>

    </div>
  )
}
