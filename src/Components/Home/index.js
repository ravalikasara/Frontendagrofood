import React, { Component } from "react";
import Slider from "react-slick";
import {Oval} from 'react-loader-spinner'
import { LiaStarSolid } from "react-icons/lia"
import {Link} from 'react-router-dom'
import {Popup} from 'reactjs-popup'

import { RiStarSLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaRupeeSign, FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";

import Header from "../Header";
import AgriContext from "../../agriContext";
import "./index.css";



class Home extends Component {
state={showPopup:false}

onClose=()=>{

    this.setState({showPopup:false})
  
}

  renderPopup = () => {
    return (
      <div className="popup-container">
       <div className="popup-card">
        <h1 className="popup-msg">Oops! You are not logged In</h1>
        <div className='popup-buttons'>
          <Link className="Link" to='/login'>
            <button type="button" className="login">Login</button>
            </Link>
        
            <button type="button" className="close"  onClick={this.onClose}>Back</button>

        </div>

       </div>
      </div>
    );
  };
renderLoading=()=>

  <div className="Loader">
    <Oval height="50" width="50" color="#005f40"/>
  </div>



renderOptionsMenu = (data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart) => {

  const onCategory=(e)=>{
    onCategoryChange(e)
 
 }


 const settings = {

  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

  return (
    <div  className="Category-container">
    <h1 className="category-heading"> Sort By Categories</h1>
    <div className="category-card">
    <Slider   className="slider-container" {...settings}>
          
    <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Sumdr Fresh")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/rustic-table-fresh-organic-fruit-generated-by-ai_188544-30300.jpg"/>
        
          </button>
        </div> 

                  
    <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Seafood")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/premium-photo/food-photography_841014-8244.jpg"/>
        
          </button>
        </div> 
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Dairy Products")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/milk-glass-bottle-background-farm_1142-40886.jpg"/>
        
          </button>
        </div>

        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Cereals and Grains")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/organic-wholegrain-cereal-bowl-healthy-meal-generated-by-ai_24640-80562.jpg"/>
        
          </button>
        </div>

        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Sweeteners")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/gourmet-dessert-collection-cute-macaroon-tray-generated-by-ai_188544-21953.jpg"/>
        
          </button>
        </div>
        
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Processed and Packaged Foods")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-classic-american-meal-generated-by-artificial-intelligence_188544-130078.jpg"/>
        
          </button>
        </div>
        
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Meat and Poultry")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/butcher-cutting-fresh-meat-pieces-close-up_1268-27932.jpg"/>
        
          </button>
        </div>
        
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Ethnic and Regional Foods")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/photo-table-with-traditional-indian-food-celebrate-diwali_125540-3655.jpg"/>
        
          </button>
        </div> 
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Bevarage Additives")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/fresh-fruit-cocktails-dominate-summer-nightlife-scene-generated-by-ai_188544-27987.jpg"/>
        
          </button>
        </div> 
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Pulses and Legumes")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/healthy-eating-with-organic-spices-herbs-generated-by-ai_24640-80521.jpg"/>
        
          </button>
        </div> 
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Edible Oils")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/fresh-olive-oil-nature-healthy-seasoning-infused-with-herbal-aromatherapy-generated-by-artificial-intelligence_24877-81006.jpg"/>
        
          </button>
        </div> 
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Alternative Protein Sources")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/healthy-meal-bowl-with-fresh-organic-variety-generated-by-ai_188544-21227.jpg"/>
        
          </button>
        </div>
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Beverages")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/refreshing-cocktail-wooden-bar-city-nightlife-celebration-generated-by-artificial-intelligence_25030-63440.jpg"/>
        
          </button>
        </div> 
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Bakery and Confectionery")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/indulgent-homemade-chocolate-chip-cookies-rustic-wood-generated-by-ai_24640-80880.jpg?"/>
        
          </button>
        </div> 
        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Functional Foods")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182444.jpg"/>
        
          </button>
        </div> 


        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Spices and Condiments")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/healthy-eating-colorful-bowl-vegetarian-curry-spices-generated-by-artificial-intelligence_25030-65296.jpg"/>
        
          </button>
        </div> 

        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Hydroponic")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/fresh-organic-plant-growth-modern-greenhouse-technology-generated-by-ai_188544-37874.jpg"/>
        
          </button>
        </div> 

        <div className="slider-img">
          <button   type="button" onClick={() => onCategory("Organic")} className="button">
          <img alt="eco" className="images" src="https://img.freepik.com/free-photo/hand-picked-organic-vegetables-wicker-basket-generated-by-ai_188544-36536.jpg"/>
        
          </button>
        </div> 

      
        </Slider> </div>

 
    
      
   
    </div>
  );
};

renderSuccess = (data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart,onAddWishlist,onPlaceOrder,onIncreaseQuantity,onDecreaseQuantity) => {
 


const onaddCart=(id)=>{
  if(isUserLoggedIn){
   onAddCart(id)
  }
  else{
    this.setState({showPopup:true})
  }
  
   }
  const onaddWishlist=(id)=>{
    if(isUserLoggedIn){
      onAddWishlist(id)
    }
    else{
      this.setState({showPopup:true})
    }
  }

 
  const onSort=(event)=>{
    console.log(event.target.value)
    sortChange(event.target.value)
}



const onOrder=(each)=>{

  if(isUserLoggedIn){
    onAddCart(each._id)
   }
   else{
     this.setState({showPopup:true})
   }
  window.location.replace('/cart')

}

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
 
  return (
    <>

<div className="products-container">
  <div className="sort-container">
<h1 className="sort"> Sort By Price</h1>
    <select onChange={onSort} className="option-card">
    {sortbyOptions.map((each) => (
            <option className={activeOptionId===each.optionId ? "category-button selected": "category-button"} type="button" value={each.optionId}  >{each.displayText}</option>
          ))}
    </select>
    
  
  </div>

     
        <Slider   className="slider-container" {...settings}>
          <div className="slider-img">
           <img alt="eco" className="images" src="https://img.freepik.com/free-photo/flat-lay-eco-lettering-white-background_23-2148290740.jpg"/>
          </div>
          <div className="slider-img">
           <img alt="sales" className="images" src="https://img.freepik.com/premium-photo/products-word-sale-colored-background-top-view-with-place-text-high-quality-photo_441923-13068.jpg"/>
          </div>
          <div className="slider-img">
           <img alt="grasss" className="images" src="https://img.freepik.com/free-photo/female-hand-holding-tomato-organic-farm_1150-6775.jpg"/>
          </div>
          <div className="slider-img">
           <img alt="sales" className="images" src="https://img.freepik.com/free-photo/look-how-i-can-positive-cheerful-teenager-afro-american-woman-points-pineapple-head-listens-audio-headphones-wears-hoodie-jacket-isolated-purple-wall-has-fun-alone_273609-37880.jpg"/>
          </div>
          <div className="slider-img">
           <img alt="women" className="images" src="https://img.freepik.com/free-photo/smiling-young-female-gardener-uniform-wearing-gardening-hat-holds-vegetable-basket-isolated-green-wall_141793-96098.jpg"/>
          </div>
          <div className="slider-img">
           <img alt="grass" className="images" src="https://img.freepik.com/free-photo/bunch-fresh-mint-female-hands_158595-6937.jpg?"/>
          </div>
     
          <div className="slider-img">
           <img alt="grassss" className="images" src="https://img.freepik.com/free-photo/young-bearded-gardener-man-wearing-jumpsuit-hat-holding-crate-full-vegetables-fresh-tomato-looking-it-intrigued-standing-blue-wall_141793-96859.jpg"/>
          </div>
        </Slider>
     

      {this.renderOptionsMenu(data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart,onAddWishlist)}


     <div className="category-and-products-container">

  {data.length>0 ?   <ul className="products-card">
          {data.map((each) => (
        
            <li className="product-item">
          
             <div className="wishlist-card">
           <button  onClick={()=>{onaddWishlist(each._id)}}className="wishlist-button"><CiHeart className="heart"/></button>
             </div>
             <img
                src={each.image_url}
                alt={each.name}
                className="product-image"
              />
              
            
              <p className="item">{each.name}</p>
              <p className="rupees"><FaRupeeSign/> {each.price}/-</p>
              
              <div className="buttons">
             <button  onClick={()=>{onaddCart(each._id)}} type="button" className="cart-button" >
                  Add +
                </button>
                <button type="button"  onClick={()=>{onOrder(each)}} className="buy-now-button">Buy Now</button>
             </div>
            </li>
          ))}
          </ul> :    <div className='cart-container empty-cart'>
              <img
                className='empty-cart-image'
                src="https://img.freepik.com/free-vector/product-hunt-concept-illustration_114360-6006.jpg"
                alt="Empty Cart"
              />
              <h1>No Items found</h1>
              <Link to='/' className="link-go-back">
                <button className='button-go-back'>Try with other keyword</button>
              </Link>
            </div>}
          
     
      </div>
      </div>
    </>
  );
};


  


  renderHome=(data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart,onAddWishlist,onPlaceOrder,onIncreaseQuantity,onDecreaseQuantity)=>{
    switch (status) {
      case "LOADING":
        
        return this.renderLoading()
      case "SUCCESS":
        
        return this.renderSuccess(data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart,onAddWishlist,onPlaceOrder,onIncreaseQuantity,onDecreaseQuantity)
      case "FAILURE":
        
        return this.renderLoading()
    
      default:
          return null;
    }
  }

  render() {
    const {showPopup}=this.state
    console.log(showPopup,"popup")
    return (
     <AgriContext.Consumer>

     {value=>{
      const {data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart,onAddWishlist,onPlaceOrder,onIncreaseQuantity,onDecreaseQuantity}=value;
return(
  <div>
    <Header/>
{showPopup ? this.renderPopup() : this.renderHome(data,categories,selectedCategory,searchInput,activeOptionId,sortbyOptions,isUserLoggedIn,userDetails,status,inputChange,getAllProducts,onCategoryChange,sortChange,onAddCart,onAddWishlist,onPlaceOrder,onIncreaseQuantity,onDecreaseQuantity)}
     
  </div>
)
     }}
     </AgriContext.Consumer>
    );
  }
}

export default Home;
