import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall ,BiInfoCircle} from 'react-icons/bi'
import Container from '../components/Container'
const Contact = () => {
  return (
    <>
       <Meta title={"Contact"}/>
     <BreadCrumb title="Contact Us"/>
     <Container class1='contact-wrapper py-5 home-wrapper-2'>
      
        <div className='row'>
          <div className='col-12'>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27657.321999474367!2d31.2419935!3d29.94592505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1689121156683!5m2!1sar!2seg" 
          width="600" height="450" 
          className='border-0 w-100'
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>

          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' className='form-control' placeholder='Name'/>
                  </div>
                  <div>
                    <input type='text' className='form-control' placeholder='Email'/>
                  </div>
                  <div>
                    <input type='text' className='form-control' placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name='' id='' className='form-control w-100' cols="30" rows="4" placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>

                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='contact-icons fs-5'/>
                      <address className='mb-0'>Hno:277 , Near village chopal , Mandaura, Sonipat, 20Haryana</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='contact-icons fs-5'/>
                      <a href='tel:+20 155451045'>
                        +20 155451045
                      </a>
                      </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='contact-icons fs-5'/>
                      <a href='mailto:aaaaszgga@gmail.com'>
                        aaaaszgga@gmail.com
                      </a>
                      </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='contact-icons fs-5'/>
                      <p className="mb-0">Monday-Friday10AM-8pm</p>
                      </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      
     </Container>
    </>
  )
}

export default Contact