import React from 'react'
import star from "../imgs/Star.png"
const Cardpro = (props) => {
let badgeText
if(props.open===0){
  badgeText="SOLD OUT"
}
else if(props.loc==="online"){
  badgeText="ONLINE"
}
  return (
      <>
    <div className='cardi'>
      {badgeText && <div className="badge">{badgeText}</div>}
    <img src={props.sr} className="card-image"/>
    <div className='card-stats'>
     <img className='card-star' src={star}/>
     <span >{props.rating} </span>
     <span  className='gray'>({props.review})</span>
     <span  className='span'>({props.off})</span>
     
     </div>
     <span className='headi'>{props.heading}</span>
     <span className='headi'>{props.des}</span>

     <p><span  className='decor'>{props.price}</span>  <span className='bold'>{props.rate}</span></p>
     <span className='span'>{props.offer}</span>
</div>
</>
  )
}

export default Cardpro