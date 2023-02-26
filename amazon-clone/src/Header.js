import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
  return (
    <div className='header'>
        <img className='header__logo' 
        src='https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221201092147.jpg' 
        // src='./logo.png' 
        alt="logo"/>
      <div className='header__search'>
        <input className='header__searchIn' type="text" name="" value=""/>
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className='header__nav'>
        <div className='header__option'>
            <span className='header__optionLine1'>Hello Guest</span>
            <span className='header__optionLine2'>Sign in</span>
            
        </div>        
        <div className='header__option'>
            <span className='header__optionLine1'>Returns</span>
            <span className='header__optionLine2'>& orders</span>
            
            
        </div>
        <div className='header__option'>
            <span className='header__optionLine1'>Your</span>
            <span className='header__optionLine2'>Prime</span>
            
            
        </div>
        <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLine2 header__basketCOunt'>0</span>
            
        </div>
        
      </div>
      
    </div>
  )
}

export default Header
