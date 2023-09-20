import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reportWebVitals from './reportWebVitals';
import CustomerLayout from './Componet/Customer/CustomerLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import AboutApp from './Componet/Customer/Pages/AboutApp';
import ContectUsApp from './Componet/Customer/Pages/ContectUsApp';
import HydralipressApp from './Componet/Customer/Pages/HydralipressApp';
import InjectionmouldingApp from './Componet/Customer/Pages/InjectionmouldingApp';
import RubbermouldingApp from './Componet/Customer/Pages/RubbermouldingApp';
import RotryMachineApp from './Componet/Customer/Pages/RotryMachineApp';
import PagenotFApp from './Componet/Customer/Pages/PagenotFApp';
import LoginApp from './Componet/Admin/LoginApp';
import AdminDashbordApp from './Componet/Admin/AdminDashbordApp';
import AdminLayout from './Componet/Admin/AdminLayout';
import ManageSliderApp from './Componet/Admin/Pages/ManageSliderApp';
import MyContectApp from './Componet/Admin/Pages/MyContectApp';
import DatatablePage from './Componet/Admin/Pages/TestApp';
import DeleteApp from './Componet/Admin/Pages/DeleteApp';
import UpdateSliderApp from './Componet/Admin/Pages/UpdateSliderApp';
import UpdateProductApp from './Componet/Admin/Pages/UpdateProductApp';
import ManageProductApp from './Componet/Admin/Pages/ManagePeoductApp';
import DeleteproductApp from './Componet/Admin/Pages/DeleteProductApp';
import DeletetesoApp from './Componet/Admin/Pages/DeletetestoApp';
import ManagetestoApp from './Componet/Admin/Pages/ManagetestoApp';
import UpdatetestoApp from './Componet/Admin/Pages/UpdatetestoApp';
import ManageinjApp from './Componet/Admin/Pages/ManageinjApp';
import DeleteinjApp from './Componet/Admin/Pages/DeleteinjApp';
import DeleteinjtableApp from './Componet/Admin/Pages/DeleteinjtableApp';
import UpdateinjtableApp from './Componet/Admin/Pages/UpdateinjtableApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CustomerLayout />} />
      <Route path='AboutApp' element={<AboutApp />} />
      <Route path='ContectUsApp' element={<ContectUsApp />} />
      <Route path='hypres' element={<HydralipressApp />} />
      <Route path='injmol' element={<InjectionmouldingApp />} />
      <Route path='rubrmc' element={<RubbermouldingApp />} />
      <Route path='rotrmc' element={<RotryMachineApp />} />
      <Route path='*' element={<PagenotFApp />} />
      
      {/* Admin routing */}
      <Route path='/admin-login' element={<LoginApp />} />
      <Route path='/admin-login/adminlayout' element={<AdminLayout />} />
      <Route path='/admin-login/manageslider' element={<ManageSliderApp />} />
      <Route path='/admin-login/manageProduct' element={<ManageProductApp />} />
      <Route path='/admin-login/managetestoApp' element={<ManagetestoApp />} />
      <Route path='/admin-login/manageinjApp' element={<ManageinjApp />} />
      <Route path='/admin-login/mycontect' element={<MyContectApp />} />
      <Route path='/admin-login/TestApp' element={<DatatablePage/>} />
      <Route path='/admin-login/deletApp/:id' element={<DeleteApp />} />
      <Route path='/admin-login/deletetestoApp/:id' element={<DeletetesoApp />} />
      <Route path='/admin-login/deleteinjApp/:id' element={<DeleteinjApp />} />
      <Route path='/admin-login/deleteinjtableApp/:id' element={<DeleteinjtableApp/>} />
      <Route path='/admin-login/deletproductApp/:id' element={<DeleteproductApp />} />
      <Route path='/admin-login/updateSliderApp/:id' element={<UpdateSliderApp />} />
      <Route path='/admin-login/updateProductApp/:id' element={<UpdateProductApp />} />
      <Route path='/admin-login/updatetestoApp/:id' element={<UpdatetestoApp />} />
      <Route path='/admin-login/updateinjtableApp/:id' element={<UpdateinjtableApp />} />

   </Routes>
   </BrowserRouter>
  </React.StrictMode>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
