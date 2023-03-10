import React from 'react'
import './product.css'

function Product({id, title, image, price, rating}){
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>Rs </small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
              {Array(rating).fill().map((_, i) =>(
                <p>🌟</p>            
              ))}
            </div>

            
        </div>
        <img src={image}
         alt=""/>
         <button type="">Add to cart</button>
      
    </div>
  )
}

export default Product
