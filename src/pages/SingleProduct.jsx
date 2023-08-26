import React, { useState, useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import {TbGitCompare,TbBrandCashapp} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaCcPaypal , FaGooglePay} from 'react-icons/fa';
import {BiLogoVisa} from 'react-icons/bi';
import {SiVenmo} from 'react-icons/si';
import {BsLink45Deg} from 'react-icons/bs';
import {GiMaterialsScience} from 'react-icons/gi';
import {LiaShippingFastSolid,LiaRulerSolid} from 'react-icons/lia';
import ReactImageZoom  from 'react-image-zoom';
import { Link, useParams, useLocation  } from 'react-router-dom';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux-tk/cart-sclice/Product-sclice';
import { addToCart } from '../Redux-tk/cart-sclice/Cart-sclice';
import Color from '../components/Color';

const SingleProduct = () => {
  
  
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log(id);
  console.log(products);
  const uniqeProduct=useLocation().state;
  console.log(uniqeProduct);
  useEffect(() => {
    dispatch(fetchProducts());
    
  },[])

   
  const props = {width:400, height:500, zoomWidth:600, 
    img: `${uniqeProduct.images[1]}`};

const [orderedProduct, setorderedProduct]=useState(true);
const copyToClipboard = (text) => {
      console.log('text', text)
      var textField = document.createElement('textarea')
      textField.innerText = text
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
}
        

      return (
        <>
     
     <Meta title={"Product Name"}/>
         <BreadCrumb title="Product Name"/>
         <Container class1='main-product-wrapper py-5 home-wrapper-2'>
            
                <div className='row'>
                    <div className='special-images col-6'>
                      <div className='main-product-image'>
                        <div>
                          <ReactImageZoom {...props} />
                        </div>
    
                      </div>
                      <div className='other-product-images d-flex flex-wrap gap-15'>
                        <div>
                          <img src={uniqeProduct.images[2]}
                           className='img-fluid' alt=''/>
                        </div>
                        <div>
                        <img src= {uniqeProduct.images[0]}
                        className='img-fluid' alt=''/>
                        </div>
                        <div>
                        <img src= {uniqeProduct.images[3]}
                        className='img-fluid' alt=''/>
                        </div>
                        <div>
                        <img src={uniqeProduct.images[2]} 
                        className='img-fluid' alt=''/>
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='main-ptoduct-details'>
                        <div className='border-bottom'>
                          <h3 className='title'>
                            {uniqeProduct.title}
                          </h3>
    
                        </div>
                        <div className='border-bottom py-3'>
                          <div className='d-flex '>
                          <p className='price me-3'>$ {uniqeProduct.price}</p>
                          <s className='price'>$ {Math.round(uniqeProduct.price*(1/(1-(uniqeProduct.discountPercentage/100))))}</s>
                          </div>
                          <div className='d-flex align-items-center gap-10'>
                               <ReactStars
                                count={5}
                                size={24}
                                value={Math.round(uniqeProduct.rating)}
                                edit={true}
                                activeColor='#ffd700'
                                />
                                <p className='mb-0 t-review'>( 2 Reviews )</p>
                          </div>
                          <a className="review-btn" href='#review'>Write a Review</a>
                        </div>
                        <div className=' py-3'>
                          <div className='d-flex gap-10 align-items-center my-2'>
                             <h3 className='product-heading'>Brand :</h3> <p className='product-data'>{uniqeProduct.brand}</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                           <h3 className='product-heading'>Category :</h3> <p className='product-data'>{uniqeProduct.category}</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Availability :</h3> <p className='product-data'>{uniqeProduct.stock} Stock</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Discount :</h3> <p className='product-data'>{uniqeProduct.discountPercentage}%</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                          <h3 className='product-heading'>Rating :</h3>
                          <ReactStars
                                count={5}
                                size={24}
                                value={Math.round(uniqeProduct.rating)}
                                edit={false}
                                activeColor='#ffd700'
                                />
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                          <h3 className='product-heading'>Size :</h3> 
                          <div className='d-flex flex-wrap gap-15'>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>XXl</span>
                          </div>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-0'>
                          <h3 className='product-heading'>Color :</h3> 
                          <Color />
                          </div>
                          <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                          <h3 className='product-heading'>Quantity :</h3>
                           <div className=''>
                            <input type='number'
                            name=''
                            min={1}
                            max={10}
                            value={uniqeProduct.quantity}
                            style={{width:"70px"}}
                            id=''
                            className='form-control'
                            />
                           </div>
                           <div className='d-flex align-items-center gap-30 ms-3'>
                           <button onClick={() => dispatch(addToCart(uniqeProduct))} className='button border-0' type='submit'>Add to Card</button>
                                
                           </div>
    
                          </div>
                          <div className='d-flex align-items-center gap-15'>
                            <div>
                              <a href=''>
                                <TbGitCompare className='fs-5 me-2' />
                                 Add to Compare</a>
                            </div>
                            <div>
                              <a href=''>
                                <AiOutlineHeart className='fs-5 me-2' />
                                Add to Wishlist
                              </a>
                            </div>
                          </div>
                          <div className='product-properities d-flex gap-10 flex-column my-4'>
                            <div className='d-flex align-items-center'>
                                <LiaShippingFastSolid className='details-icons fs-5 me-2' />
                                <h3 className='product-heading'>Shipping & return :</h3>
                             
                            </div>
                            <div className='d-flex align-items-center'>
                                <GiMaterialsScience className=' details-icons fs-5 me-2' />
                                <h3 className='product-heading'>Materials :</h3>
                             
                            </div>
                            <div className='d-flex align-items-center'>
                                <LiaRulerSolid className='details-icons fs-5 me-2' />
                                <h3 className='product-heading'>Dimentions :</h3>
                             
                            </div>
                            <div className='d-flex align-items-center'>
                                <AiOutlineHeart className='details-icons fs-5 me-2' />
                                <h3 className='product-heading'>Care Instructions :</h3>
                             
                            </div>
                            <div className='d-flex align-items-center'>
                             
                             <a href="javascript:void(0);" 
                             onClick={()=>{
                              copyToClipboard(
                                "https://th.bing.com/th/id/R.5df2e96a299523aac0d4a4f234c40da5?rik=IlYSNzM40EVSMA&riu=http%3a%2f%2fwww.clothesnfashion.com%2fwp-content%2fuploads%2f2014%2f12%2fwww.prowatches.net_.jpg&ehk=Ix%2bQca5t7COW%2fpIfafkrIE0CZWxOHgHiFHW4UJzaWus%3d&risl=&pid=ImgRaw&r=0"
                                 );
                             }}>
                               <BsLink45Deg className='fs-5 me-2'/>
                                copy product link
                                 </a> 
                          </div>
                             
                          </div>

                          <div className='payment d-flex flex-column align-items-center justify-content-center'>
                            <h3 className='fs-6'>Payment Methods</h3>
                            <div className='payments-methods d-flex align-items-center'>
                               <FaCcPaypal className='payment-icon fs-4  me-3' />
                               <BiLogoVisa className='payment-icon fs-4 me-3' />
                               <TbBrandCashapp className='payment-icon fs-4 me-3' />
                               <SiVenmo className='payment-icon fs-3  me-3' />
                               <FaGooglePay className='payment-icon fs-3 ' />
                            </div>

                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
            
         </Container>
         <Container class1='description-wrapper py-5 home-wrapper-2'>
            
                <div className='row'>
                    <div className='col-12'>
                    <h4>Description</h4>
                        <div className='single-description bg-white p-3'>
                        
                        <p>
                            {uniqeProduct.description}
                        </p>
                        </div>
                    </div>
                </div>
            
         </Container>
         <Container class1='reviews-wrapper home-wrapper-2'>
            
                <div className='row'>
                    <div className='col-12'>
                      <h3 id="review">Reviews</h3>
                        <div className='review-inner-wrapper'>
                        <div className='review-head d-flex justify-content-between align-items-end'>
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex align-items-center gap-10'>
                                <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor='#ffd700'
                                />
                                <p className='mb-0'>Based on 2 reviews</p>
                                </div>
                            </div>
                            {
                                orderedProduct && (<div>
                                    <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                                </div>)
                            }
                        </div>
                        <div className='review-form py-4'>
                        <h4>Write a Review</h4>
                        <form action='' className='d-flex flex-column gap-15'>
                      <div>
                               <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={true}
                                activeColor='#ffd700'
                                />
                      </div>
                      <div>
                        <textarea name='' id='' className='form-control w-100' cols="30" rows="4" placeholder='Comments'></textarea>
                      </div>
                      <div className='d-flex justify-content-end'>
                        <button className='button border-0'>Submit Review</button>
                      </div>
    
                    </form>
                        </div>
                        <div className='reviews mt-4'>
                            <div className='review'>
                                <div className='d-flex gao-10 align-items-center'>
                                  <h6 className='mb-0'>Navdeep</h6>
                                  <ReactStars 
                                  count={5}
                                  size={24}
                                  value={4}
                                  edit={false}
                                  activeColor="#ffd700" 
                                />
                                </div>
                                <p className='mt-3'>
                                I look forward to many more years of a mutually profitable relationship.
                                Thanks again! We have enjoyed your support in the past, and I am sure 
                                we will continue to do business together for many years to come. 
                                I hope to see you there and to continue serving you.
                                Thank you once more for being such a great customer.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
           
         </Container>
         <Container class1='popular-wrapper py-5 home-wrapper-2'>
            
              <div className='row'>
                <div className='col-12'>
                  <h3 className='section-heading'>Our Popular Products</h3>
                </div>
                 
              </div>
              <div className='row'>
                
              {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
             ))}
                
              </div>
            
          </Container>
        </>
      )
}

export default SingleProduct