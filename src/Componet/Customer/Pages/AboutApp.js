import React from 'react';
import NavbarApp from '../NavbarApp';
import FooterApp from '../FooterApp';
import aboutimg from '../image/aboutimg.png';
import whyimg from '../image/whyus.png';

export default function AboutApp() {
  return (
    <div>
        <NavbarApp />
        <div className='aboutus-text container mb-5'>
        <div className='row'>
            <div className='col-md-6'>
                <h2>Welcome to</h2>
                <h3 >Perfect Machinery</h3>
                <p align="justify" className='mt-5' >Perfect Machinery is one of the leading firms that is engaged in designing Manufacturing & exeperting as hydraulic system to meet the desired application demands at clients end.</p>

            <p>Creation Hydraulic is dealing in an extensive hydraulic system that have wide Jewellery Design Like...</p>

            <p>- Hydraulic Press Machine</p>
            <p>- Injection Moulding Machine</p>
            <p>- Rubber Moulding</p>
           
            </div>
            <div className='col-md-6'>
                <div className='about-img'>
                    <img src={aboutimg} alt='about_img' style={{width:"100%"}} />
                </div>
            </div>
        </div>
        </div>
        <div className='team-text'>
        <h2 className='text-center container'>Our team includes highly skilled and experienced team of professionals who assist us in manufacturing and supplying the best quality machines in accordance with international quality standards.</h2>
        </div>
        <div className='aboutus-text container shadow p-5 mb-5'>
        <div className='row'>
            <div className='col-md-6'>
            <div className='about-img'>
                    <img src={whyimg} alt='about_img' style={{width:"100%"}} />
                </div>
            </div>
            <div className='col-md-6'>
              
               
                <h3 className='mt-5' >Why You Choose Us</h3>
                <p align="justify" className='mt-5' >We have a strongly believe that for any organization to have a leading edge in the market place, emphasis on the product quality, customer service & value added improvement should always take priority; it is for this reason that we are moving ahead to constantly keep abreast of the latest technology and design to ensure that both existing and potential customers needs are met.</p>

            <p>We have one of the largest manufacturing units of these products in India and are acclaimed for quality of our products. Our products are manufactured using premium quality. The diversified clientele around the world is the proof of quality and satisidustry products.</p>

        
           
            </div>
        </div>
        </div>
        <FooterApp />
    </div>
  )
}
