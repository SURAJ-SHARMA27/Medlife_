import React from 'react'
import Header from './Header'
import cart from "../imgs/cart.png"
import login from "../imgs/login.png"
import medicine from '../imgs/Medlife.PNG' 
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className='header_main '>
        <nav class="navbar  bg-info texto">
           <div class=" container-fluid ">
             <div className='col-5 col-sm-10 '>
               <form class="d-flex " role="search">
               <img src={medicine} className='icon'/>
                   <a class="navbar-brand"> Deliever At</a>
                   <input class="form-control me-2" type="search" placeholder="Search for medicine and wellness products" aria-label="Search"/>
                   <button class="btn btn-outline-success" type="submit">Search</button>
                   </form>
                   </div>
                  <div  className=" col-sm-2 col-12 cart">
                    
                   <button class="btn  btn-outline-danger" type="submit"><img src={cart} width="25px"/> Cart</button>
                  <Link to="/section"> <button class="btn me-2 btn-outline-danger" type="submit"><img src={login} width="25px"/>Sign-in/Login</button></Link>
                   </div>
               
            </div>
        </nav>
      
        
      
    </div>
  
    </>
  )
}

export default Navbar