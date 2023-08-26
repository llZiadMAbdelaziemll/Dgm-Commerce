import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import BlogCards from '../components/BlogCards'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog Name"}/>
   <BreadCrumb title="Blogs"/>
   <Container class1='blog-wrapper home-wrapper-2 py-5'>
      
          <div className='row'>
              
              <div className='col-12'>
                  <div className='single-blog-card'>
                      <Link to="/blogs" className='d-flex align-items-center gap-10'>
                         <HiOutlineArrowLeft className='fs-4'/> Go back to Blogs</Link>
                      <h3 className='title'>
                      Beatiful Sunday Morning Renaissance
                      </h3>
                      <img src='images/bag-1.jpg' 
                      className='img-fluid w-100 my-4' 
                      alt='' />
                      <p>
                          dfsdfsdfsdfsfsdfs
                          dsfsdfsdfsfsssssssssssssss
                          sssssssssssssssssssssssss
                          ssssssssssss
                      </p>
                  </div>
              </div>
          </div>
     
   </Container>
  </>
  )
}

export default SingleBlog