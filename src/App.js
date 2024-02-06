
import {Component}  from 'react'
import { BrowserRouter as Router, Switch, Route,withRouter} from "react-router-dom";

import AgriContext from './agriContext';
import Home from "./Components/Home";
import Login from './Components/Login';
import Cookies from 'js-cookie'
import Register from './Components/Register';

import Cart from './Components/Cart';

import Wishlist from './Components/Wishlist'
import OrderPage from './Components/Orderpage'
import { RiContactsBookLine } from 'react-icons/ri';

import image from '../src/Original.png'

const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
];

class App extends Component {
  state = {
    data: [],
   
    sortBy:"id",
    categories: [],
    order:"ASC",
    category: "",
    status:"INITIAL",
    userDetails:[],
    isUserLoggedIn:false,
    selectedCategory: "",
    searchInput: "",
    cart:[],
    wishlist:[],
    orderDetails:{shippingAddress:undefined,phoneNumber:undefined},

    activeOptionId: sortbyOptions[0].optionId,
  };

  inputChange = (value) => {
    this.setState({
      searchInput: value,
    });
  };

  onAddCart=async(id)=>{
 
    const {isUserLoggedIn,userDetails}=this.state;
    if(isUserLoggedIn)
    {

      const answer = await fetch(`https://tiny-foal-cardigan.cyclic.app/add-cart?id=${id}&user_id=${userDetails._id}&quantity=1`);
console.log(answer)
      this.getCartItems()
    
 
     
    }
    else{
      this.props.history.replace('/login')
    }
   
   

 
  } 


  onAddWishlist=async(id)=>{
 
    const {isUserLoggedIn,userDetails}=this.state;
   
   
    if(isUserLoggedIn)
    {

      const answer = await fetch(`https://tiny-foal-cardigan.cyclic.app/add-wishlist?id=${id}&user_id=${userDetails._id}`);
      if(answer.ok){
        this.getwishListItems()
      }
   

     
    
    
 
     
    }
    else{
      this.props.history.replace('/cart')
   
    }
  } 
  
  
getCartItems=async()=>{
    const {userDetails}=this.state;

const answer= await fetch(`https://tiny-foal-cardigan.cyclic.app/cart?user_id=${userDetails._id}`)
const data=await answer.json()
console.log(data.data,"cart")
this.setState({cart:data.data})

this.getwishListItems()

  }
  getwishListItems=async()=>{
    const {userDetails}=this.state;

const answer= await fetch(`https://tiny-foal-cardigan.cyclic.app/wishlist?user_id=${userDetails._id}`)
const data=await answer.json()
console.log(data.data,"wishlist")
this.setState({wishlist:data.data})

this.getAllCategories()

  }

  onIncreaseQuantity=async(id)=>{
    const {isUserLoggedIn,userDetails}=this.state;
    if(isUserLoggedIn){
      console.log(id,userDetails._id,"add")
      const answer = await fetch(`https://tiny-foal-cardigan.cyclic.app/add-quantity?id=${id}&user_id=${userDetails._id}`);
   
this.getCartItems()
     
  }
}

  onDecreaseQuantity=async(id)=>{
    const {isUserLoggedIn,userDetails}=this.state;
    console.log(id,userDetails,"less")
    if(isUserLoggedIn)
    {

      const answer = await fetch(`https://tiny-foal-cardigan.cyclic.app/remove-quantity?id=${id}&user_id=${userDetails._id}`);
     

      this.getCartItems()
  }
}
 

  componentDidMount() {

    const jwtToken=Cookies.get('jwt_token')
   
    if(jwtToken===undefined){
      this.getAllCategories();
    }
    else{
      this.getUserInfo()
    }
   
  }

  getUserInfo=async()=>{
    const jwtToken=Cookies.get('jwt_token')
  console.log(jwtToken)
    this.setState({status:"LOADING"})
    const url="https://tiny-foal-cardigan.cyclic.app/user-info"
    const options={
      method:"POST",
      headers:{
        Authorization:`Bearer ${jwtToken}`
      }
    
    }
    const answer = await  fetch(url,options)
    const data = await answer.json();

  
    if (answer.ok) {
      
      this.setState({ userDetails:data.data,isUserLoggedIn:true },()=>{ this.getCartItems()});
    }  
    else{
      this.setState({isUserLoggedIn:false})
    }


  }




  

  getAllCategories = async () => {

     this.setState({status:"LOADING"})
    const answer = await fetch(`https://tiny-foal-cardigan.cyclic.app/categories`);

    if (answer.ok) {
      const data = await answer.json();
   
    
      this.setState({ categories: data });
    }  

    

    this.getAllProducts();
  };


  
  onCategoryChange = (value) => {
   
    const { categories } = this.state;
    if (value !== "") {
      const element = categories.filter(
        (each) => each.name === value
      );
     console.log(element)
      this.setState(
        {
          selectedCategory: value,
          category: element[0].id,
        },
        () => {
          this.getAllProducts();
        }
      );
    } else {
      this.setState(
        {
          selectedCategory: value,
          category: "",
        },
        () => {
          this.getAllProducts();
        }
      );
    }
  };

  getAllProducts = async () => {
    const { sortBy,searchInput, order, category} = this.state;
   
  
    const answer = await fetch(
      `https://tiny-foal-cardigan.cyclic.app/items?sort_by=${sortBy}&order=${order}&search_q=${searchInput}&category_id=${category}`
    );
    if (answer.ok) {
      const data = await answer.json();
    
      this.setState({ data, status: "SUCCESS" });
    } else {
      this.setState({ status: "FAILURE" });
    }
    
  };

    sortChange = (value) => {
    if (value === "PRICE_HIGH") {
      this.setState(
        {
          activeOptionId: value,
          sortBy: "price",
          order: "DESC",
        },
        () => {
          this.getAllProducts();
        }
      );
    } else {
      this.setState(
        {
          activeOptionId: value,
          sortBy: "price",
          order: "ASC",
        },
        () => {
          this.getAllProducts();
        }
      );
    }
  };


  onRemoveCart=async(user_id,product_id)=>{
  console.log(user_id,product_id)
    const url =`https://tiny-foal-cardigan.cyclic.app/remove-cart?user_id=${user_id}&product_id=${product_id}`;
    
    const data = await fetch(url)

    this.getCartItems()

      
  }

  onRemoveWishlist=async(user_id,product_id)=>{
    console.log(user_id,product_id)
      const url =`https://tiny-foal-cardigan.cyclic.app/remove-wishlist?user_id=${user_id}&product_id=${product_id}`;
      
      const data = await fetch(url)
  
      this.getwishListItems()
  
        
    }
  

   
onRedirect=()=>{
  window.location.replace('/')
this.getAllProducts()
}

    

    onOrderDetails=async(details)=>{
        
        const {cart,userDetails}=this.state;
       

       const  onRedirect=()=>{
       
          this.onRedirect()
        }

        let amount=0;
          const amountMap = cart.map((each)=>{
            amount+=(each.price * each.quantity)
            
          })
          
          
         amount=amount * 100
          const currency="INR"
          const receiptId='qdfjhgjhgf';
          const response = await fetch('https://tiny-foal-cardigan.cyclic.app/order',{
              method:"POST",
              body:JSON.stringify({
                  amount,
                  currency,
                  receipt:receiptId
              }),
              headers:{
                  'Content-Type':"application/json"
          }
          })
      
          const order = await response.json();
    
        if(response.ok){
    
          const status = await fetch('https://tiny-foal-cardigan.cyclic.app/order-details',{

            method:"POST",
            body:JSON.stringify({

               orderDetails:details,
               cart:cart

            }),
            headers:{
                'Content-Type':"application/json"
        }
        })

       
        if(status.ok){
          
          var options = {
            "key": "rzp_test_DKtx4q8NpIT7UA", // Enter the Key ID generated from the Dashboard
          amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
           currency,
            "name": "Sumdr Agrofood", //your business name
            "description": "Test Transaction",
            "image": image,
            "order_id":order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
                const body ={
                    ...response,
                };
               
                const validateRes = await fetch('https://tiny-foal-cardigan.cyclic.app/order/validate',{
                    method:"POST",
                    body:JSON.stringify(body),
                    headers:{
                        'Content-Type':"application/json"
                }
                })
              
                const jsonRes = await validateRes.json()
              
               if(validateRes.ok){
             
            onRedirect()
               }
      
            },
      
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": userDetails.username, //your customer's name
                "email": userDetails.email, 
                "contact": details.phoneNumber  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "banglore"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new window.Razorpay(options);
      
       
     
      
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
           rzp1.open();
         
      
        
        }
          

      }
      }
   
  render(){

    const {data,categories,selectedCategory,searchInput,activeOptionId,userDetails,isUserLoggedIn,status,cart,wishlist}=this.state;
 
    return(
      <Router>
      <AgriContext.Provider value={{data,categories,selectedCategory,cart,wishlist,searchInput,activeOptionId,sortbyOptions,userDetails,isUserLoggedIn,status,inputChange: this.inputChange,getAllProducts:this.getAllProducts,onCategoryChange:this.onCategoryChange,sortChange:this.sortChange,onAddCart:this.onAddCart, onRemoveCart:this.onRemoveCart,onIncreaseQuantity:this.onIncreaseQuantity,onDecreaseQuantity:this.onDecreaseQuantity,onAddWishlist:this.onAddWishlist,getwishListItems:this.getwishListItems,onRemoveWishlist:this.onRemoveWishlist,onPlaceOrder:this.onPlaceOrder, onOrderDetails:this. onOrderDetails}}>

      <Switch>
            <Route exact path="/" component={Home} />
            <Route
  exact
  path='/login'
  render={(props) => (
    <Login {...props} getAllProducts={this.getAllProducts} />
  )}
/>
 <Route exact path='/register' component={Register} />
            <Route exact path='/cart' component={Cart}  />
            <Route exact path='/wishlist' component={Wishlist} />
            <Route exact path='/order' component={OrderPage} />
          </Switch>


  </AgriContext.Provider>
  </Router>
)
}
  }




export default withRouter(App);