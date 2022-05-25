import React from 'react'
import medicin from '../imgs/medicin.png'
import wellness from "../imgs/navimg3.png"
import labtest from "../imgs/navimg1.png"
import beauty from "../imgs/navimg6.png"
import healthcare from "../imgs/navimg8.png"
function Header() {
  return (
   <>
   <div className='nav_marg'>
   <nav class=" navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavi" aria-controls="navbarNavi" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavi">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
           
       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       <img src={medicin} width="45px"/>  Medicine
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">All Medicines</a></li>
            <li><a class="dropdown-item" href="#">Previously Ordered Products</a></li>
          </ul>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={wellness} width="30px"/>   Wellness
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={labtest} width="30px" />  Labtest
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={beauty} width="35px"/> Beauty
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Personal Care</a></li>
            <li><a class="dropdown-item" href="#">Make-Up</a></li>
            <li><a class="dropdown-item" href="#">Hair</a></li>
            <li><a class="dropdown-item" href="#">Skin Care</a></li>
            <li><a class="dropdown-item" href="#">Tools & Application</a></li>
            <li><a class="dropdown-item" href="#">Mom & Baby</a></li>
            <li><a class="dropdown-item" href="#">Fragrances</a></li>
            
            
            <li><a class="dropdown-item" href="#">Men's Grooming</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={healthcare} width="36px"/> Healthcare
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</div>
 
</>
  )
}

export default Header