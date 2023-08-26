import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container';
import {RxCross2} from 'react-icons/rx';
const WishList = () => {
  return (
    <>
     <Meta title={"Wishlist"}/>
     <BreadCrumb title="Wishlist"/>
     <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
        
            <div className='row'>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                    <RxCross2 className='img-fluid position-absolute cross'/>
                        <div className='wishlist-card-image'>
                            <img src='images/watch.jpg' className='w-100 img-fluid' alt='' />
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>nlkml 5120i khhhhhhhhhhhh 5222jhbjkkjnj</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>

                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                    <RxCross2 className='img-fluid position-absolute cross'/>
                        <div className='wishlist-card-image'>
                            <img src='images/watch.jpg' className='w-100 img-fluid' alt='' />
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>nlkml 5120i khhhhhhhhhhhh 5222jhbjkkjnj</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>

                </div>
            </div>
        
     </Container>
   </>

  )
}

export default WishList