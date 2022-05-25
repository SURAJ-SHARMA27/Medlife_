import React from 'react'
import med from '../imgs/static 1.jpg'
import beauty from '../imgs/static 2.jpg'
import well from '../imgs/static 3.png'


function Static() {
  return (
      <>
    <div className='container container_static'>
        <div className='row'>
            <div className='col-sm-4 col-12  '>
            <div class="card mb-3  static">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={med} class="img-fluid rounded-start" alt="..."/>
                    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Order Medicine</h5>
        <span className='span'>Save Upto 25% off</span>
      </div>
    </div>
  </div>
</div>
            </div>
            <div className='col-sm-4 col-12 '>
            <div class="card mb-3 static">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={beauty} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Beauty Products</h5>
        <span className='span'>Save Upto 40% off</span>
      </div>
    </div>
  </div>
</div>
            </div>
            <div className='col-sm-4 col-12 '>
            <div class="card mb-3  static" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={well} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Wellness Corner</h5>
        <span className='span'>Save Upto 10% off</span>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Static