
import React from 'react'
import Card from './Card'
import star from "../imgs/Star.png"
import { Link } from 'react-router-dom'
import Cardp from './Cardpro'
import data from "../data_desc"

function Category() {
    const cards=data.map(item=>{
        return(
          <Cardp className="cards" 
          key={item.id}
          open={item.open}
    sr={item.sr} 
    heading={item.heading}
    des={item.des}
    rating={item.rating}
    review={item.review}
    off={item.off}
    rate={item.rate}
    offer={item.offer}
    price={item.price}
    >
      </Cardp>
        )
      })
    return (
        <>
            <div className='category-div'>
                <div className='row'>
                    <div className='col-3 side-cat'>

                        <div id="list-example" class="list-group">
                            <h3>Filters</h3>
                            <hr></hr>
                            <h6>Categories</h6>
                            <div class="dropdown">
                                <button class="btn dropdown-toggle filter-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Health Care
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Professional medical s...</a></li>
                                    <li><a class="dropdown-item" href="#">Home Medical Supplies</a></li>
                                    <li><a class="dropdown-item" href="#">Women's Safety</a></li>
                                    <li><a class="dropdown-item" href="#">Home Medicines</a></li>
                                    <li><a class="dropdown-item" href="#">Health Supplements</a></li>
                                    <li><a class="dropdown-item more" href="#">Show 1 more</a></li>
                                </ul>
                            </div>
                            <hr></hr>
                            <h6>PRICE</h6>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='rate-drop row'>
                                <div className='col-5'>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle rate-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Min
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <span className='to'>to</span>
                                </div>
                                <div className='col-5'>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle rate-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            4000+
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>


</div>
                            <hr></hr>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    <b>Membership Coupon</b>
                                </label>
                            </div>
                            <hr></hr>

                            <div class="dropdown">
                                <button class="btn dropdown-toggle filter-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    CUSTOMER RATING
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                4 <img src={star} className='card-star' /> & above
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                3 <img src={star} className='card-star' /> & above
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                2 <img src={star} className='card-star' /> & above
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                1 <img src={star} className='card-star' /> & above
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <hr></hr>


<div class="dropdown">
                                <button class="btn dropdown-toggle filter-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    OFFERS
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Buy More, Save More
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                No Cost EMI
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Special Price
                                            </label>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <hr></hr>


<div class="dropdown">
                                <button class="btn dropdown-toggle filter-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    DISCOUNT
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Less than 10%
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                10% or More
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                20% or More
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                30% or More
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                40% or More
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                50% or More
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <hr></hr>


<div class="dropdown">
                                <button class="btn dropdown-toggle filter-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                   GST INVOICE AVAILABLE
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                GST Invoice Available
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <hr></hr>

                            <div class="dropdown">
                                <button class="btn dropdown-toggle filter-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    AVAILABILITY
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Include Out of Stock
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <div className='col-9'>
                    <h3 className="start">Health buddy</h3>
<div className="container">
 <Link to='/product_desc' style={{textDecoration: "none",color:"black"}}>

<div className="row">

{cards}
</div>
</Link> 

</div>
<nav aria-label="Page navigation example" className='mt-5 mb-5'>
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category