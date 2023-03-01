import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className="home__container">
            {/* <img src={require('./banner4.jpeg')} */}
            <img className='home__image' src="https://png.pngtree.com/background/20210709/original/pngtree-tanabata-full-screen-banner-background-flowers-pink-picture-image_918737.jpg"
            alt="banner"/>
            <div className='home__row'>
              <Product id="000001" title ='product1' price={400}
              image="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={4}
              />                 
              <Product id="000002" title ='product2' price={400}
              image="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={4}
              />              
              
            </div>
            <div className='home__row'>
              <Product id="000003" title ='product3' price={20000}
              image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
              rating={5}
              />                
              <Product id="000004" title ='product4' price={50}
              image="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={5}
              />               
              <Product id="000005" title ='product4' price={50}
              image="https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={5}
              />              
            </div>
            <div className='home__row'>
              <Product id="000006" title ='product4' price={50}
              image="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={5}
              />   
              
              
            </div>
        </div>
    </div>
  )
}

export default Home
