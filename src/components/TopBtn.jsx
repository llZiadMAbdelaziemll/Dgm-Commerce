import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {PiArrowFatLinesUpBold} from 'react-icons/pi'

const TopBtn = () => {
    const [topBtn,setTopBtn]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            
            if(window.scrollY > 100){
                setTopBtn(true);
                var scroll = document.querySelector(".topBtn");
                scroll.classList.toggle("active",window.scrollY > 100);
            } else{
                setTopBtn(false);
             
            }
            
        })
    }, [])
    
    const scrollUp= () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
    <>
      {topBtn && (
        <button className='topBtn' onClick={scrollUp}><PiArrowFatLinesUpBold className='top-icon' /></button>
      )}
    </>
  )
}

export default TopBtn