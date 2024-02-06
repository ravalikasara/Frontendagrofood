import React, { Component } from "react";
import Slider from "react-slick";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";
import { MdAccountCircle,MdOutlineLogout,MdMenu } from "react-icons/md";
import {FaSearch,FaCartArrowDown,FaRegHeart} from 'react-icons/fa'
import Cookies from 'js-cookie'

import "./index.css";
import AgriContext from "../../agriContext";
import logo from '../../../src/Original.png'
import { IoIosArrowRoundBack } from "react-icons/io";


class Header extends Component {


  state={isMenuClicked:false}
  
  logout=()=>{
    Cookies.remove('jwt_token')
    window.location.replace('/login')
  }

  onMenuClick=()=>{
    this.setState(prev=>({isMenuClicked:!prev.isMenuClicked}))
  }

  render() {
    const {isMenuClicked}=this.state
    console.log(isMenuClicked)
    return(
      <AgriContext.Consumer>
        {value=>{
const {data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart,cart}=value;

const ongetAllProducts=()=>{
  getAllProducts()
}
const onInputChange=(event)=>{
  inputChange(event.target.value)
}



return(
 <> <nav className="nav-bar-container">
    <img src={logo} className="logo"/>
 <div className="input-container">
          <input
            type="search"
            value={searchInput}
            onChange={onInputChange}
            className="product-input"
            placeholder="Search for a product"
          />
          <button
            className="search-button"
            type="button"
            label="hi"
            onClick={ongetAllProducts}
          >
            <FaSearch className="search-icon" />
          </button>
        </div>
        <div className="hand-burger-menu">
        
        <Popup trigger={<button><MdMenu className="menu-logo"/></button>} position="bottom left">
 <div className="menu-card-container">   <div className="menu-items-card"> 
         <Link className="Link" to="/cart">
          <div >
            <p  className="cart-number menu-item">Cart</p>
          </div>
       </Link>
       <Link className="Link" to="/wishlist">
          <div >
            <p className="cart-number menu-item">WishList</p>
          </div>
       </Link>
      
       
      
     
      
          <div >
           {!isUserLoggedIn ? <Link className="Link" to="/login">
          <div >
            <p  className="cart-number menu-item">Login</p>
          </div>
       </Link> :  <p  className="cart-number menu-item" onClick={this.logout}>Logout </p>
         } </div>
        </div>
        </div>
  </Popup>
        </div>
        
    <ul className="nav-bar">
      
     

     
      <li className="nav-items">
        <Link className="Link" to="/cart">
          <div className="cart-img">
            <p className="cart-number">{cart.length}</p>
          </div>
       </Link>
      </li>



      <li className="nav-items">
        <Link className="Link" to="/wishlist">
          <FaRegHeart/>
       </Link>
      </li>
       {isUserLoggedIn &&  <li className="nav-items">
       <p className="profile-img-desc">{userDetails.username[0]}</p>
  
      </li>}
  
     {isUserLoggedIn  ? <li className="nav-items">
     <button onClick={this.logout} className="search-button">
     <MdOutlineLogout  className="login-logo" />
     </button>
      </li> :  <li className="nav-items"> <Link className="Link" to="/login">
          <MdAccountCircle/>
       </Link> </li> }
   
    </ul>
  </nav>

     
         
         
 

 </>
)
        }}
      </AgriContext.Consumer>
    )
  }
}

export default Header;
