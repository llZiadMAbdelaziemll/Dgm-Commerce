import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCards from '../components/BlogCards'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import { services } from '../utils/ProjectData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderCard from '../components/SliderCard'
import TopBtn from '../components/TopBtn'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux-tk/cart-sclice/Product-sclice';

const Home = () => {
  const products = useSelector((state) => state.products);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    
  },[])
  return (
    
    
    <>
     
    <Container class1='home-wrapper-1 py-5'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/main-banner.jpg" className="d-block w-100" alt="..."/>
      <div className="main-banner-content d-none d-md-block position-absolute">
              <h4>SUPERCHARGED</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/main-banner-1.jpg" className="d-block w-100" alt="..."/>
      <div className="main-banner-content d-none d-md-block position-absolute">
      <h4>SUPERCHARGED</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/home-3.jpeg" className="d-block w-100" alt="..."/>
      <div className="main-banner-content d-none d-md-block position-absolute">
      <h4>SUPERCHARGED</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                 
              </div>
              
            </div>
            <div className='col-6'>
                <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center '>
                   <div className='small-banner position-relative'>
                <img src='images/catbanner-01.jpg'
                className='img-fluid rounded-3'
                alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>From $999.00 or<br /> $41.62/mo.</p>
                  
                </div>
                </div>
                <div className='small-banner position-relative'>
                <img src='images/catbanner-02.jpg'
                className='img-fluid rounded-3'
                alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>From $999.00 or<br /> $41.62/mo.</p>
                  
                </div>
                </div>
                <div className='small-banner position-relative'>
                <img src='images/catbanner-03.jpg'
                className='img-fluid rounded-3'
                alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>From $999.00 or<br /> $41.62/mo.</p>
                  
                </div>
                </div>
                <div className='small-banner position-relative'>
                <img src='images/catbanner-04.jpg'
                className='img-fluid rounded-3'
                alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>From $999.00 or<br /> $41.62/mo.</p>
                  
                </div>
                </div>
                </div>
                
            </div>
            
          </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
               
                {
                  services?.map((i, j) => {
                    return(
                      <div className='servies-collection d-flex align-items-center gap-15' key={j}>
                          <div className='servies-img'><img src={i.image} alt=''/></div>
                          <div>
                            <h6>{i.title}</h6>
                             <p className='mb-0'>{i.tagline}</p>
                          </div>
                     </div>

                    );
                  })
                }
               
              </div>
            </div>
          </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt=''/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt=''/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt=''/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt=''/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt=''/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt=''/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt=''/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt=''/>
                 </div>
              </div>

            </div>
          </div>
    </Container>
     <Container class1='featured-wrapper py-5 home-wrapper-2'>
      
     <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            
             {products.slice(6, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
             ))}
            
          </div>
       
     </Container>
     <Container class1='special-wrapper py-5 home-wrapper-2'>
     <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>special Product</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
     </Container>
     <Container class1='popular-wrapper py-5 home-wrapper-2'>
     <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
             
          </div>
          <div className='row'>
          <Swiper className='row row-slider'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      
      /*onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
    >
      {products.slice(0,10).map((product) => (
       <SwiperSlide key={product.id}>
         <SliderCard product={product} />

       </SwiperSlide>
  ))}
      
    </Swiper>
          </div>
   
     </Container>
     <Container class1='marque-wrapper py-5'>
     <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand'/>
                </div>
               </Marquee>

              </div>
               
            </div>
          </div>
     </Container>
     <Container class1='blog-wrapper py-5 home-wrapper-2'>
     <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            
          </div>
          <div className='row'>
            <div className='col-3'>
            <BlogCards />
            </div>
            <div className='col-3'>
            <BlogCards />
            </div>
            <div className='col-3'>
            <BlogCards />
            </div>
            <div className='col-3'>
            <BlogCards />
            </div>
          </div>
     </Container>
     <TopBtn />
    
    </>
  )
}

export default Home