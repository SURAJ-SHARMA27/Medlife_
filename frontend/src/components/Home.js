import React from 'react'
import '../App.css';
import Card from './Card';
import Carousal from './Carousal';
import Grid from './Grid';
import Hero from './Hero';
import Navbar from './Navbar';
import PauseOnHover from './Pauseonhover';
import Static from './Static';
import Pause from './Pause';
import Header from './Header';
import Trending from './Trending'
import Footer from './Footer';
import Health from './Health';
import data from '../data2';
import Sale from './Sale';
import Description from './Description';
import Product_desc from './Product_desc';
import Testimonal from './Testimonial';



const Home = () => {
    const cards = data.map(item => {
        return(
          <Health
          key = {item.id}
          item = {item}
          />
        )
      })
  return (
    <>
      <Navbar/> 
    <Header/> 
     <Grid/>
    
    <Carousal/>
    <Card/>
    <Hero/>

    <Static/>
    
    <Trending/>  
    <Sale/>
     
       <PauseOnHover/>  
       <h1 className='health-heading'>Health Articles</h1>
       <hr className='underline'
    style={{width:"20rem",
    height:"0.1rem"}} />
       <div className='health-div container'>
      
    {cards}

    </div>
    <Testimonal/>
      <Footer/> 
       {/* <Description/>  */}
{/* <Product_desc/> */}
    </>
  )
}

export default Home