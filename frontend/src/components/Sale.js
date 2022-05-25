import React from 'react'
import clock from '../imgs/clock.png'
import sale1 from '../imgs/slick 2.jpg'
import sale2 from '../imgs/slick 3.jpg'
import sale3 from '../imgs/slick 4.jpg'
import sale4 from '../imgs/slick 5.jpg'
import Timer from './Timer.js'


function Sale() {

    return (
        <>
            <div class="sale-div">
                <img src={clock} className='sale-clock' />
                <h5 className='sale-title'>Deal Of The Day</h5>
                <span className='line'>|</span>
                <Timer className='timer-flex'/>
           

            <div class="row">
                <div class="column">
                    <div class="sale-card">
                        <img src={sale1} class="card-img-top" alt="..." />

                    </div>
                </div>

                <div class="column">
                    <div class="sale-card">
                        <img src={sale2} class="card-img-top" alt="..." />
                    </div>
                </div>

                <div class="column">
                    <div class="sale-card">
                        <img src={sale3} class="card-img-top" alt="..." />
                    </div>
                </div>

                <div class="column">
                    <div class="sale-card">
                        <img src={sale4} class="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            </div>


        </>
    )
}

export default Sale