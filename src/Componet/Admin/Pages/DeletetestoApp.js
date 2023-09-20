import { useEffect} from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// CRUD store=>Post , show=>get, edit =>get, update=>put, delete=>delete
export default function DeletetesoApp() 
{
// get id here
const{id}=useParams();

const Navigate=useNavigate();

useEffect(()=>{
// call delete api on category
// axios.delete(`http://localhost:4000/testo/${id}`,id)
axios.delete(`https://perfect-data.onrender.com/testo/${id}`,id)
.then(()=>{
Swal.fire({
    title: 'success',
    text: 'Contect deleted successfully',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
  // Navigate('/admin-login/mycontect');
})
window.location="/admin-login/managetestoApp"
 



})
  return (
    <div>    
   
    </div>
  )
}
