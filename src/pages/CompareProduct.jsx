import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
import Container from '../components/Container'
import {RxCross2} from 'react-icons/rx';
const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare Products"}/>
   <BreadCrumb title="Compare Products"/>
   <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
    
         <div className='row'>
             <div className='col-3'>
                 <div className='compare-product-card position-relative p-3 pb-0'>
                     <RxCross2 className='img-fluid position-absolute cross'/>
                     <div className='product-card-image mb-4'>
                         <img src='images/watch.jpg' alt=''/>
                     </div>
                     <div className='compare-product-details'>
                         <h5 className='title'>
                             Honor sdfddf sdfsdfsdfs sdfsdfsd50 sf50
                         </h5>
                         <h6 className='price mb-3 mt-3'>$ 100</h6>

                         <div>
                             <div className='product-detail'>
                                 <h5>Brand:</h5>
                                 <p>Havels</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Type:</h5>
                                 <p>Watch</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Availabilty:</h5>
                                 <p>In Stock</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Color:</h5>
                                 <Color />

                             </div>
                             <div className='product-detail'>
                                 <h5>Size</h5>
                                 <div>
                                     <p>S</p>
                                     <p>M</p>
                                 </div>

                             </div>
                         </div>

                     </div>

                 </div>

             </div>
             <div className='col-3'>
                 <div className='compare-product-card position-relative p-3 pb-0'>
                 <RxCross2 className='img-fluid position-absolute cross'/>
                     <div className='product-card-image mb-4'>
                         <img src='images/watch.jpg' alt=''/>
                     </div>
                     <div className='compare-product-details'>
                         <h5 className='title'>
                             Honor sdfddf sdfsdfsdfs sdfsdfsd50 sf50
                         </h5>
                         <h6 className='price mb-3 mt-3'>$ 100</h6>

                         <div>
                             <div className='product-detail'>
                                 <h5>Brand:</h5>
                                 <p>Havels</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Type:</h5>
                                 <p>Watch</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Availabilty:</h5>
                                 <p>In Stock</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Color:</h5>
                                 <Color />

                             </div>
                             <div className='product-detail'>
                                 <h5>Size</h5>
                                 <div>
                                     <p>S</p>
                                     <p>M</p>
                                 </div>

                             </div>
                         </div>

                     </div>

                 </div>

             </div>
             <div className='col-3'>
                 <div className='compare-product-card position-relative p-3 pb-0'>
                 <RxCross2 className='img-fluid position-absolute cross'/>
                     <div className='product-card-image mb-4'>
                         <img src='images/watch.jpg' alt=''/>
                     </div>
                     <div className='compare-product-details'>
                         <h5 className='title'>
                             Honor sdfddf sdfsdfsdfs sdfsdfsd50 sf50
                         </h5>
                         <h6 className='price mb-3 mt-3'>$ 100</h6>

                         <div>
                             <div className='product-detail'>
                                 <h5>Brand:</h5>
                                 <p>Havels</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Type:</h5>
                                 <p>Watch</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Availabilty:</h5>
                                 <p>In Stock</p>

                             </div>
                             <div className='product-detail'>
                                 <h5>Color:</h5>
                                 <Color />

                             </div>
                             <div className='product-detail'>
                                 <h5>Size</h5>
                                 <div>
                                     <p>S</p>
                                     <p>M</p>
                                 </div>

                             </div>
                         </div>

                     </div>

                 </div>

             </div>

         </div>
     
   </Container>
 </>
  )
}

export default CompareProduct