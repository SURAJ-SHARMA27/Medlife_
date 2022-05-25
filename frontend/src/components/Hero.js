import React from 'react'
import card1 from "../imgs/card1.png"
import card2 from "../imgs/beauty.png"
const Hero = () => {
  return (
    <>
    <div className="row hero">
  <div className="col-sm-4 col-10 comp ">

    <div className="card border-0">
      <div className="card-body">
     
        <h5 className="card-title">Previous Orders</h5>
        <p className="card-text">Your previously ordered products</p>
        <a href="#" className="btn btn-dark">View Orders</a>
    
                
            
      </div>
      
    </div>
  </div>
  <img src={card1} className="img-fluid col-sm-1 col-2" alt=""/>
  <div className="col-sm-4 col-10 comp ">
      
    <div className="card  border-0 ">
      <div className="card-body">
        <h5 className="card-title">Beauty Products</h5>
        <p className="card-text">Save Upto 40% off</p>
        <a href="#" className="btn btn-dark">Explore Beauty</a>
      </div>
    </div>
  </div>
  <img src={card2} className="img-fluid col-sm-1 col-2" alt=""/>
</div>
    </>
  )
}

export default Hero