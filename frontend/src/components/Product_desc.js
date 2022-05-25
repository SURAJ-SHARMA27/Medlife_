import React,{useState,useEffect} from 'react'
import axios from 'axios';
import img1 from "../imgs/des1.jpg"
import img2 from "../imgs/des2.jpg"
import img3 from "../imgs/des3.jpg"
import img4 from "../imgs/des4.jpg"

const Product_desc = () => {
  return (
    <>
     
     <div className = "card-wrapper">
      <div className = "card_Desc">
        
        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img className="image" src = {img1} alt = "shoe image"/>
              <img className="image" src = {img2} alt = "shoe image"/>
              <img className="image" src = {img3} alt = "shoe image"/>
              <img className="image" src = {img4} alt = "shoe image"/>
            </div>
          </div>
          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">
                <img className="image" src = {img1} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">
                <img className="image" src = {img2} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">
                <img className="image" src ={img3} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "4">
                <img className="image" src ={img4} alt = "shoe image"/>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- card right --> */}
        <div className = "product-content">
          <h2 className = "product-title">VWash Plus Intimate Hygiene Wash </h2>
          <a href = "#" className = "product-link">visit nearest store</a>
          <div className = "product-rating">
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div className = "product-price">
            <p className = "last-price">Old Price: <span>$257.00</span></p>
            <p className = "new-price">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div className = "product-detail">
            <h2>about this item: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>Shoes</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>

          <div className = "purchase-info">
            <input type = "number" min = "0" value = "1"/>
            <button type = "button" className = "btn">
              Add to Cart <i className = "fas fa-shopping-cart"></i>
            </button>
            <button type = "button" className = "btn">Compare</button>
          </div>

          <div className = "social-links">
            <p>Share At: </p>
            <a href = "#">
              <i className = "fab fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i className = "fab fa-twitter"></i>
            </a>
            <a href = "#">
              <i className = "fab fa-instagram"></i>
            </a>
            <a href = "#">
              <i className = "fab fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i className = "fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Product_desc