import React from 'react'
import Header from './Header';
import Cardp from './Cardpro'

 import data from "../data_desc"
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import Category from './Category';

const Description = () => {
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
    <Navbar/>
    <Header/>
     <Category/>
{/* <h3 className="start">Health buddy</h3>
<div className="container">
 <Link to='/product_desc' style={{textDecoration: "none",color:"black"}}>

<div className="row">

{cards}
</div>
</Link> 

</div> */}


 
    </>
  )
}

export default Description