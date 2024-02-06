// wishlist.js


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AgriContext from '../../../src/agriContext/index';
import { FaRupeeSign, FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";

import './index.css'

class Cart extends Component {
  render() {
    return (
      <AgriContext.Consumer>
        {(value) => {
          const {
            wishlist,
    
            onAddWishlist,getwishListItems,onRemoveWishlist,onAddCart
          } = value;

        

          const onItemRemove = (user_id, product_id) => {
            onRemoveWishlist(user_id, product_id);
          };
          const onaddCart=(product_id)=>{
            console.log("wislhjhg")
            onAddCart(product_id)
          }
console.log(wishlist,"wishlist route")
         

          return wishlist.length === 0 ? (
            <div className='cart-container empty-cart'>
              <img
                className='empty-cart-image'
                src="https://img.freepik.com/free-vector/product-hunt-concept-illustration_114360-6006.jpg"
                alt="Empty Cart"
              />
              <h1>Wishlist is empty</h1>
              <Link to='/' className="link-go-back">
                <button className='button-go-back'>Go Back</button>
              </Link>
            </div>
          ) : (
            <div className='cart-container'>
              
              <Link to='/' className="link-go-back">
              <button className="transparent-button" >  <div className='back-card'>
<IoIosArrowRoundBack className="back"/>
          </div>
          </button>
              </Link>
              <div className='cart-header'>
                <h1 className='wishlist'>Your Wishlist</h1>
              
                <Link to='/' className='link-go-back'>
                  <button className='button-go-back'>Continue Shopping</button>
                </Link>
              </div>
              <ul className='cart-list'>
                {wishlist.map((each) => (
                  <li className='cart-item' key={each.product_id}>
                    <div className='item-details'>
                      <img
                        src={each.image_url}
                        alt={each.name}
                        className='item-image'
                      />
                      <div className='item-description'>
                        <h3 className='item-name'>{each.name}</h3>
                        <p className='item-price'>
                          <FaRupeeSign />
                          {each.price}
                        </p>
                       
                      </div>
                    </div>
                    <button onClick={() => onaddCart( each.product_id)} className='add-button exit'>
                      Add to cart
                    </button>
                    <button onClick={() => onItemRemove(each.user_id, each.product_id)} className='remove-button exit'>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
             
            </div>
          );
        }}
      </AgriContext.Consumer>
    );
  }
}

export default Cart;
