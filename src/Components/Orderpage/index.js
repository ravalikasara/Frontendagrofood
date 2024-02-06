import {Component} from 'react'
import {Link} from 'react-router-dom'

import AgriContext from "../../agriContext";
import Cookies from 'js-cookie'

import './index.css'



class OrderPage extends Component {
  state = {shippingAddress:undefined,phoneNumber:undefined, showSubmitError: false, errorMsg: ''}


  onSubmitSuccess = ()=> {


    window.location.replace('/login')

  
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }




  onShippingDetailsChange = event => {
 
    this.setState({shippingAddress: event.target.value})
  }





 
  onphoneNumberChange= event => {
    
    this.setState({phoneNumber: event.target.value})
  }


  render() {
  const {shippingAddress,phoneNumber,showSubmitError,errorMsg}=this.state

 return (
      <AgriContext.Consumer>

      {value=>{
       const {data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart,onAddWishlist,onPlaceOrder,onIncreaseQuantity,onDecreaseQuantity,onOrderDetails}=value;
       const onformSubmit = async (event) => {
        const {shippingAddress,phoneNumber} = this.state
        event.preventDefault()
      if(shippingAddress!==undefined,phoneNumber!==undefined){
       
    
        this.setState({showSubmitError:false})
       const orderDetails={ shippingAddress,
        phoneNumber}
       onOrderDetails(orderDetails)
    
       
        
        
    
     
      }
     
      else{
        this.setState({showSubmitError: true, errorMsg:"Please fill all the required details"})
      }
    }
     return(  <div className="order-details">
        <div className='card'>
        <div className="form-label-div">
                <label className="login-form-label" htmlFor="shippingAddress">
                  Address
                </label>
                <textarea
                  onChange={this.onShippingDetailsChange}
                  value={shippingAddress}
                  className="login-form-inputs"
                  
                  id="shippingAddress"
                  rows="10"  cols="50"
                />
              </div>
              <div className="form-label-div">
                <label className="login-form-label" htmlFor="phoneNumber">
                 phone Number
                </label>
                <input
                  onChange={this.onphoneNumberChange}
                  value={phoneNumber}
                  className="login-form-input"
                  type="text"
                  id="phoneNumber"
                />
             
              </div>
              <button onClick={onformSubmit} type="submit" className="login-button">
                Proceed to payment
              </button>


              {showSubmitError ? (
                  <p className="errorMsg">{errorMsg}</p>
                ) : null}
        </div>
        </div>
        
        )
      }}
      </AgriContext.Consumer>
    )
  }
}


export default OrderPage