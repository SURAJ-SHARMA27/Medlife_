import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slick1 from '../imgs/BPL.jpg'
import slick2 from '../imgs/slick 2.jpg'
import slick3 from '../imgs/slick 3.jpg'
import slick4 from '../imgs/slick 4.jpg'
import slick5 from '../imgs/slick 5.jpg'
import slick6 from '../imgs/slick 6.jpg'
import slick7 from '../imgs/slick 7.jpg'



function Trending() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
      };
  return (
    <div className='box'>
       <div className='trending'>
           <div className='conatiner'>
              <div className='row'>
                 <div className='col-8'>
                    <h2 className="trending-title">Trending Today</h2>
                 </div>
                <div className='col-4'>
                   <button className='trending-button'>View all</button>
                </div>
             </div>
           </div>
      
        
        
        <Slider {...settings}>
          <div>
            <img src ={slick1} className='trending-card'/>
          </div>
          <div>
          <img src ={slick2} className='trending-card'/>
          </div>
          <div>
          <img src ={slick3} className='trending-card' />
          </div>
          <div>
          <img src ={slick4} className='trending-card'/>
          </div>
          <div>
          <img src ={slick5} className='trending-card'/>
          </div>
          <div>
          <img src ={slick6} className='trending-card'/>
          </div>
          <div>
          <img src ={slick7} className='trending-card'/>
          </div>
        </Slider>
      </div>
      </div>
  )
}

export default Trending