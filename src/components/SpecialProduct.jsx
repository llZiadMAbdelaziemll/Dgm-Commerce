import React, { useState } from 'react'
import { useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
    const [partyTime,setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

   
   useEffect(() => {
        const countDownDate = new Date("8/28/2023 23:59:59");
         
        const interval = setInterval(() => {
            const now = new Date();
            const distance = countDownDate.getTime() - now.getTime();
        
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            setDays(days);
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(hours);
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(minutes);
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setSeconds(seconds);

            if (days <= 0 && hours <= 0 && 0 <= minutes && 0 <= seconds){
                setPartyTime(true);
            }

        
        },1000);

        return () => clearInterval(interval);

    },[]); 
  return (
    <div className='col-4 mb-3'>
        <div className='special-product-card p-3'> 
          <div className='d-flex justify-content-between gap-15 inside-card'>
            <div className='d-flex flex-column gap-15 justify-content-around img-side'>
            <div>
                <img src='images/watch.jpg' className='img-fluid' alt='watch'/>
            </div>
            <div className='d-flex justify-content-between gap-30'>
                <div>
                    <img src='images/watch-5.jpg' className='img-fluid' alt='watch'/>
                </div>
                <div>
                    <img src='images/watch-4.jpg' className='img-fluid' alt='watch'/>
                </div>
            </div>
            </div>
            <div className='special-product-content'>
                <h5 className='brand'>Havels</h5>
                <h6 className='title'>
                    Samsung Galaxy Note10+ Mobile Phone; Sim...
                </h6>
                <ReactStars
                  count={5}
                   value={3}
                   size={24}
                   edit={false}
                    activeColor="#ffd700"
                    />
                    <p className='price d-flex justify-content-between mb-2'>
                        <span className='red-p'>$100</span>
                        
                        <strike>$200 </strike>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        
                        <div className='d-flex gap-10 align-items-center'>
                            <span className=' badge rounded-circle p-2' >{days}</span>:
                            <span className=' badge rounded-circle p-2' >{hours}</span>:
                            <span className=' badge rounded-circle p-2' >{minutes}</span>:
                            <span className=' badge rounded-circle p-2 ' >{seconds}</span>
                        </div>
                        
                    </div>
                    <div className='prod-count my-2'>
                            <p>Products : 5</p>
                            <div className="progress">
                               <div className="progress-bar" role="progressbar" 
                               style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" 
                               aria-valuemax="100"></div>
                           </div>
                        </div>
                        <Link className='ms-5 px-3 button'>add to cart</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SpecialProduct