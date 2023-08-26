import { useState , useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsCard } from '../Redux-tk/cart-sclice/ProductCard-slice';
import TopBtn from '../components/TopBtn'
const OurStore = () => {
    const [grid, setGrid] = useState(3);
    const [active, setActive] = useState(false);
    const products2 = useSelector((state) => state.productsCard);
  
    const dispatch = useDispatch();
    const handleActive = () =>{
        setActive(!active);
    }
    useEffect(() => {
      dispatch(fetchProductsCard());
      
    },[])
  return (
    <>
    <Meta title={"Our Store"}/>
     <BreadCrumb title="Our Store"/>
     <Container class1='store-wrapper home-wrapper-2 py-5'>
       
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                              Shop By Categories
                        </h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>Tv</li>
                                <li>Camera</li>
                                <li>Laptop</li>

                            </ul>
                        </div>

                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                              Filte By
                        </h3>
                        <div>
                            <h5 className='sub-title'>
                                Availablity
                            </h5>
                            <div>
                            <div className='form-check'>
                                <input className='form-check-input'
                                type='checkbox'
                                value=''
                                id='' />
                                <label className='form-check-label' htmlFor=''>
                                    In Stock (1)
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input'
                                type='checkbox'
                                value=''
                                id=''
                                 />
                                <label className='form-check-label' htmlFor=''>
                                    Out of Stock (0)
                                </label>
                            </div>
                            </div>
                            <h5 className='sub-title'>
                                Price
                            </h5>
                            <div className='d-flex align-items-center gap-10'>
                            <div className="price-form form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                <label htmlFor="floatingInput">From</label>
                            </div>
                            <div className="price-form form-floating">
                                <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                <label htmlFor="floatingInput1">To</label>
                            </div>
                            </div>
                            <h5 className='sub-title'>
                                Color
                            </h5>
                            
                                <div>
                                    <Color />
                                </div>
                            <h5 className='sub-title'>
                                Size
                            </h5>
                            <div>
                            <div className='form-check'>
                                <input className='form-check-input'
                                type='checkbox'
                                value=''
                                id='color-1' />
                                <label className='form-check-label' htmlFor='color-1'>
                                    S (2)
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input'
                                type='checkbox'
                                value=''
                                id='color-2' />
                                <label className='form-check-label' htmlFor='color-2'>
                                    M (2)
                                </label>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                              Product Tags
                        </h3>
                        <div>
                            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>
                            </div>
                        </div>

                    </div>
                    <div className='filter-card pb-2'>
                        <h3 className='filter-title'>
                              Random Product
                        </h3>
                        <div>
                            <div className='random-product mb-3 d-flex'>
                                <div className='w-50'>
                                    <img src='images/watch.jpg' className='img-fluid' alt=''/>
                                </div>
                                <div className='w-50'>
                                    <h5>
                                        Kids headphones bulk 10 pack multi colored for students
                                    </h5>
                                    <ReactStars
                                     count={5}
                                     value={3}
                                     size={24}
                                     edit={false}
                                     activeColor="#ffd700"
                                    />
                                    <p>$ 300</p>
                                </div>
                            </div>
                            <div className='random-product d-flex'>
                                <div className='w-50'>
                                    <img src='images/watch.jpg' className='img-fluid' alt=''/>
                                </div>
                                <div className='w-50'>
                                    <h5>
                                        Kids headphones bulk 10 pack multi colored for students
                                    </h5>
                                    <ReactStars
                                     count={5}
                                     value={3}
                                     size={24}
                                     edit={false}
                                     activeColor="#ffd700"
                                    />
                                    <p>$ 300</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                            <select name='' className='form-control form-select' id=''>
                                <option value="manual">Featured</option>
                                <option value="best-selling">Best selling</option>
                                <option value="title-ascending">Alphabetically, A-Z</option>
                                <option value="title-descending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-descending">Price, high to low</option>
                                <option value="price-ascending">Date, old to new</option>
                                <option value="price-descending">Date, new to old</option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='totalproducts mb-0'>21 Products</p>
                            <div className='filter-arranger d-flex gap-10 align-items-center grid'>
                                <img onClick={()=>{
                                    setGrid(3);
                                    handleActive;
                                }}
                                 src='images/gr4.svg' className={`d-block img-fluid ${(active === true) ? 'active' : 'notActive'}`} alt=''/>
                                <img onClick={()=>{
                                    setGrid(4);
                                    handleActive;
                                }}
                                 src='images/gr3.svg' className={`d-block img-fluid ${(active === true) ? 'active' : 'notActive'}`} alt=''/>
                                <img onClick={()=>{
                                    setGrid(6);
                                    handleActive;
                                }}
                                src='images/gr2.svg' className={`d-block img-fluid ${(active === true) ? 'active' : 'notActive'}`} alt=''/> 
                                <img onClick={()=>{
                                    setGrid(12);
                                    handleActive;
                                }}
                                src='images/gr.svg' className={`d-block img-fluid ${(active === true) ? 'active' : 'notActive'}`} alt=''/>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='products-list pb-5'>
                    
                       <div className='d-flex gap-15 flex-wrap' >
                       {products2.map((product) => (
                           <ProductCard grid={grid}  key={product.id} product={product}/>
                           ))}
                        </div>
                   
                    </div>
                </div>
                
            </div>
        
     </Container>
     <TopBtn />
    </>
  )
}

export default OurStore