import React from 'react';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';
import { Link } from 'react-router-dom';
import img1 from '../image/rotry1.webp';
import img2 from '../image/rotry2.webp';




export default function RotryMachineApp() {
  return (
    <div >
      <NavbarApp />
      <h1 className='hyprestext container'>Rotery Moulding  configurations</h1>
      <h1 className='mt-5 mx-auto w-50 container c-text'>C-type</h1>
      <div className='row c-press'>
        <div className='col-md-6 mt-5'>
          <img src={img1} alt='press1'  style={{width:"100%"}}/> 
        </div>
        <div className='col-md-6 mt-5'>


      <div className='container table-responsive'>
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
    <tr>
      <th scope="row">Clamp Forge</th>
      <td>Ton</td>
      <td>90</td>
      <td>110</td>
      <td>140</td>
      <td>170</td>
      <td>200</td>
    </tr>
    <tr>
    <th scope="row">Clamp Stroke</th>
      <td>MM</td>
      <td>340</td>
      <td>380</td>
      <td>420</td>
      <td>460</td>
      <td>510</td>
    </tr>
    <tr>
    <th scope="row">Min. Mould Height</th>
      <td>MM</td>
      <td>150</td>
      <td>150</td>
      <td>200</td>
      <td>220</td>
      <td>225</td>
    </tr>
    <tr>
    <th scope="row">Max. Mould Height</th>
      <td>MM</td>
      <td>400</td>
      <td>450</td>
      <td>500</td>
      <td>550</td>
      <td>600</td>
    </tr>      <tr>
    <th scope="row">Platen Size</th>
      <td>MM</td>
      <td>555 x 555</td>
      <td>605 X 605</td>
      <td> 665 X 665 </td>
      <td>725 X 725 </td>
      <td>790 X 790</td>
    </tr>   <tr>
    <th scope="row">Ejector Stroke</th>
      <td>MM</td>
      <td>85</td>
      <td>100</td>
      <td>120</td>
      <td>130</td>
      <td>150</td>
    </tr>   <tr>
    <th scope="row">Ejector Forge</th>
      <td>Ton</td>
      <td>4.9</td>
      <td>4.9</td>
      <td>4.9</td>
      <td>6.1</td>
      <td>6.1</td>
    </tr>    <tr>
    <th scope="row">Total Oil Capacity</th>
      <td>liter</td>
      <td>250</td>
      <td>250</td>
      <td>250</td>
      <td>250</td>
      <td>250</td>
    </tr>  
  </tbody>
</table>
</div>
</div>
</div>
<h1 className='mt-5 mx-auto w-50 container c-text'>H-type</h1>
      <div className='row c-press'>
       
        <div className='col-md-6 mt-5'>


      <div className='container table-responsive'>
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
    <tr>
      <th scope="row">Clamp Forge</th>
      <td>Ton</td>
      <td>90</td>
      <td>110</td>
      <td>140</td>
      <td>170</td>
      <td>200</td>
    </tr>
    <tr>
    <th scope="row">Clamp Stroke</th>
      <td>MM</td>
      <td>340</td>
      <td>380</td>
      <td>420</td>
      <td>460</td>
      <td>510</td>
    </tr>
    <tr>
    <th scope="row">Min. Mould Height</th>
      <td>MM</td>
      <td>150</td>
      <td>150</td>
      <td>200</td>
      <td>220</td>
      <td>225</td>
    </tr>
    <tr>
    <th scope="row">Max. Mould Height</th>
      <td>MM</td>
      <td>400</td>
      <td>450</td>
      <td>500</td>
      <td>550</td>
      <td>600</td>
    </tr>    <tr>
    <th scope="row">Platen Size</th>
      <td>MM</td>
      <td>555 x 555</td>
      <td>605 X 605</td>
      <td> 665 X 665 </td>
      <td>725 X 725 </td>
      <td>790 X 790</td>
    </tr>   <tr>
    <th scope="row">Ejector Stroke</th>
      <td>MM</td>
      <td>85</td>
      <td>100</td>
      <td>120</td>
      <td>130</td>
      <td>150</td>
    </tr>   <tr>
    <th scope="row">Ejector Forge</th>
      <td>Ton</td>
      <td>4.9</td>
      <td>4.9</td>
      <td>4.9</td>
      <td>6.1</td>
      <td>6.1</td>
    </tr>    <tr>
    <th scope="row">Total Oil Capacity</th>
      <td>liter</td>
      <td>250</td>
      <td>250</td>
      <td>250</td>
      <td>250</td>
      <td>250</td>
    </tr>  
  </tbody>
</table>
</div>

</div>
<div className='col-md-6 mt-5'>
          <img src={img2} alt='press1'  style={{width:"100%"}}/> 
        </div>
</div>
      <FooterApp />
    </div>
  )
}
