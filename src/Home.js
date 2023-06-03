import React from 'react'
import "./Home.css";
import Product from './Product';
import logo1 from './assets/eng_pc11.jpg';
import img1 from "./assets/img1.jpg"

function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <img  className="home_image" src={logo1} alt="" />
      
      <div className="home_row">
        <Product title="How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
           price={29.29}
           image={img1}
           rating={4}
         
        /> 
        <Product title="How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
           price={29.29}
           image={img1}
           rating={3}
         
        /> 

        
        
      </div>
      <div className="home_row">
      <Product title="How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
           price={29.29}
           image={img1}
           rating={2}
         
        /> 
      <Product title="How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
           price={29.29}
           image={img1}
           rating={5}
         
        /> 
      <Product title="How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
           price={29.29}
           image={img1}
           rating={1}
         
        /> 
      </div>
      <div className="home_row">
      <Product title="How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
           price={29.29}
           image={img1}
           rating={1}
         
        /> 
      </div>
    </div>
    </div>
  )
}

export default Home
