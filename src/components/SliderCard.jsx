import React, { useEffect } from 'react'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { fetchProducts } from '../Redux-tk/cart-sclice/Product-sclice';
const SliderCard = (props) => {
    const {grid, product} = props;
  
    let location = useLocation();
    
  return (
    <>
       
           <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
           <Link to={`${location.pathname == "/" ? `product/${product.id}` :`${product.id}`}`} 
           state={product} className="slider-card position-relative">
               <div className='wishlist-icon position-absolute'>
                   <button className='border-0 bg-transparent'>
                      <img src='images/wish.svg' alt=''/>
                   </button>
               </div>
               <div className='product-image'>
                   
                   <img src={product.images[0]} className='img-fluid' alt='hf'/>
               </div>
               <div className='product-details'>
                   <h6 className='brand'>{product.title}</h6>
                   <h5 className='product-title'>
                   {product.description}
                   </h5>
                   <ReactStars
                     count={5}
                      value={3}
                      size={24}
                      edit={false}
                       activeColor="#ffd700"
                       />
                       <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>
                           sdfvsfdssssssssssssssssssssssssssssss
                           gffhgfhfgdfsfsfsdfsdvsdvsdsvdsvsdsdvsdvdsds
                           sdvsdfsdfsdfsdfsdfsdfsdfds
                           sfdfsdfsdfsdfsdfsddsf
                       </p>
                   <p className='price'>${product.price}</p>
               </div>
               <div className='action-bar position-absolute'>
                   <div className='d-flex flex-column gap-15'>
                   <button className='border-0 bg-transparent'>
                         <img src='images/prodcompare.svg' alt=''/>
                      </button>
                      <button className='border-0 bg-transparent'>
                         <img src='images/view.svg' alt=''/>
                      </button>
                      <button className='border-0 bg-transparent'>
                         <img src='images/add-cart.svg' alt=''/>
                      </button>
                      
                   </div>
   
               </div>
           </Link>
       </div>
       

      
        
       
      
   
     </>
  )
}

export default SliderCard