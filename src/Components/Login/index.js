import React,{useState,Component} from 'react'
import {auth,google,facebook,twitter} from './config/fire'
import {signInWithPopup,signOut} from 'firebase/auth'


import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import './index.css'

import googleImg from '../../../src/icons8-google-48.png'


class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: '',socialDetails:[]}


  setSocialAuthorization=async(details)=>{

   const userDetails = {username:details.displayName, email:details.email,profileImg:details.photoURL}
   const url=`https://powerful-gear-bull.cyclic.app/social-login`
       const options = {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(userDetails),
       }
       const response = await fetch(url, options)
       const answer = await response.json()
       if(response.ok){
        this.onSubmitSuccess(answer.jwtToken)
       }
       else{
        this.onSubmitFailure(answer.message)
       }
    
  }

  onSubmitSuccess = jwtToken => {

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    window.location.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onformSubmit = async event => {
    event.preventDefault()
  
    const {username, password} = this.state
    const userDetails = {username, password}
const url=`https://powerful-gear-bull.cyclic.app/login`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
 
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwtToken)
    } else {
      this.onSubmitFailure(data.message)
    }
  }

  onusernameChange = event => {
    this.setState({username: event.target.value})
  }

  onpasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSocialLogin=async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
     
      if(result.user ===undefined){
             this.setState({errorMsg:"Please try again after some time"})
      }
      else{
        this.setSocialAuthorization(result.user)
        
      }
    } catch (error) {
      this.setState({errorMsg:"Please try again with other methods"})
    
    }
  };
  


  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Link to="/" />
    }
    return (
      <div className="login-page-container">
        <div className="login-card-container">
          <img
            alt="website login"
            className="login-page-image"
            src="https://res.cloudinary.com/du6aueulp/image/upload/v1699595893/z6j1ajzrllbhxrxxpuuv.png"
          />
          <div className="login-form-card">
           
            <h1 className="login-heading">Log In to Proceed Next...</h1>
            <form onSubmit={this.onformSubmit} className="form-card">
              <div className="form-label-div">
                <label className="login-form-label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  onChange={this.onusernameChange}
                  value={username}
                  className="login-form-input"
                  type="text"
                  id="username"
                />
              </div>
              <div className="form-label-div">
                <label className="login-form-label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  onChange={this.onpasswordChange}
                  value={password}
                  className="login-form-input"
                  type="password"
                  id="password"
                />
             
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
             


            </form>

            <div className="google-container">
         
            <div className="or-divider">
  <div className="or-text">or</div>




</div>
<div className='google-image'>





  <img src={googleImg}  alt="google" className='google-logo'/>
<button  onClick={()=>{this.onSocialLogin(google)}} className='login-button-google'>LogIn with Google</button>
</div>
<div className='facebook-image'>





  <FaFacebookF className='facebook-logo'/>
<button  onClick={()=>{this.onSocialLogin(facebook)}} className='login-button-facebook'>LogIn with Facebook</button>
</div>

      

           <div className='twitter-image'>





  <FaTwitter className='facebook-logo'/>
<button  onClick={()=>{this.onSocialLogin(twitter)}} className='login-button-facebook'>LogIn with Twitter</button>
</div>

           </div>
           {showSubmitError ? (
                  <p className="errorMsg">{errorMsg}</p>
                ) : null}
        <div className="login-register-container">
    <p>New User ? <a href="/register">Register</a></p>
</div>
         
       
      </div>
     
      </div >



          </div>
  
    )
  }
}

export default Login