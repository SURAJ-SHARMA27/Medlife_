
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonal() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
      <>
      <div className='main'>
    <div className='testimonal'>
    <h2 className='text-center testimonal-heading'> TESTIMONIALS </h2>
    <hr></hr>
    <Slider {...settings}>
      <div className='testimonal-card mx-5'>
        <h3>ANJU MADNANI</h3>
        <span className='gray '>49 / Homemaker</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='testimonal-card mx-5'>
        <h3>SHRUTI</h3>
        <span className='gray'>26 / EY Employee</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='testimonal-card mx-5'>
        <h3>DEVINA</h3>
        <span className='gray'>25 / Doctor</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='testimonal-card mx-5'>
        <h3>SHALINI</h3>
        <span className='gray'>25 / ICICI Employee</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='testimonal-card mx-5'>
        <h3>ANIRUDH</h3>
        <span className='gray'>24 / Bigbasket Employee</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='testimonal-card mx-5'>
        <h3>ISHA</h3>
        <span className='gray'>22 / Student</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='testimonal-card mx-5'>
        <h3>ANITA NAGPAL</h3>
        <span className='gray'>47 / Homemaker</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='testimonal-card mx-5'>
        <h3>ASMI</h3>
        <span className='gray'>18 / student</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
      <div className='testimonal-card mx-5'>
        <h3>NAMAN</h3>
        <span className='gray'>27 / EY Employee</span>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
    </Slider>
  </div>
  </div>
  </>
  )


}

export default Testimonal