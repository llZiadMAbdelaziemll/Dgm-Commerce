import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {AiFillDelete} from "react-icons/ai"
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../Redux-tk/cart-sclice/Cart-sclice'
const CartSection = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, product) => {
      acc += product.price * product.quantity;
      return acc;
    }, 0)

  return (
    <>
    <Meta title={"Cart"}/>
   <BreadCrumb title="Cart"/>
   <Container class1='cart-wrapper home-wrapper-2 py-5'>
      
          <div className='row'>
              <div className='col-12'>
                  <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                      <h4 className='cart-col-1 fw-bold'>Product</h4>
                      <h4 className='cart-col-2 fw-bold'>Price</h4>
                      <h4 className='cart-col-3 fw-bold'>Quantity</h4>
                      <h4 className='cart-col-4 fw-bold'>Total</h4>
                  </div>
                  {cart.map((product) => (
                    <div key={product.id} className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                    <div className='cart-col-1 gap-15 d-flex align-items-center'>
                        <div className='w-25'>
                            <img src={product.images[0]}  
                            className="img-fluid" alt=''/>
                        </div>
                        <div className='w-75'>
                            <p className='fw-bold'>{product.title}</p>
                            <p>size: <span>efwe</span></p>
                            <p>color: <span>gds</span></p>
                        </div>
                    </div>
                    <div className='cart-col-2'>
                        <h5 className='price'>$ {product.price}</h5>
                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div>
                            <input 
                            className='form-control'
                            type='number'
                            name=''
                            min={1}
                            max={10}
                            value={product.quantity}
                            id=''
                            />
                        </div>
                        <div>
                            <AiFillDelete onClick={() => dispatch(deleteFromCart(product))} className='text-danger' />
                    
                        </div>
                    </div>
                    <div className='cart-col-4'>
                    <h5 className='price'>$ {product.price * product.quantity}</h5>

                    </div>
                </div>
                  ))}
                  
                  

              </div>
              <div className='col-12 py-2 mt-4'>
                  <div className='d-flex justify-content-between align-items-baseline'>
                    <Link to='/product' className='button'>Continue To Shopping</Link>
                    <div className='total-price d-flex flex-column align-items-end'>
                      <h4>SubTotal: <span>$ {totalPrice.toFixed(2)}</span></h4>
                      <p>Taxes and shipping calculated at checkout</p>
                      <Link to='/checkout' className='button'>Checkout</Link>
                    </div>
                  </div>
                  
              </div>
          </div>
      
   </Container>
  </>
  )
}

export default CartSection