import {Component} from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'
import { LiaSkullCrossbonesSolid } from 'react-icons/lia'


import { IoIosArrowRoundBack } from "react-icons/io";

class Register extends Component {
  state = {username:undefined, password: undefined,email:undefined,phoneNumber:undefined, showSubmitError: false, errorMsg: ''}

  onSubmitSuccess = ()=> {


    window.location.replace('/login')

  
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onformSubmit = async event => {
    const {username, password,email,phoneNumber} = this.state
    event.preventDefault()
  if(username!==undefined && email!==undefined && password!==undefined,phoneNumber!==undefined){
   

    this.setState({showSubmitError:false})


   
    
    const userDetails = {username, password,email,phoneNumber}



    const options= {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },

      body: JSON.stringify({
        username,
        password,
        email,
        phoneNumber
 
      })
    }
  
    const response = await fetch('https://powerful-gear-bull.cyclic.app/register',options)
   
   const answer = await  response.json()

   if(response.ok){
this.onSubmitSuccess()
   }
   else{
    this.onSubmitFailure(answer.message)
   }

  }
  else{
    this.setState({showSubmitError: true, errorMsg:"Please fill all the required details"})
  }
}


  onusernameChange = event => {
    this.setState({username: event.target.value})
  }



  onpasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onemailChange= event => {
    this.setState({email: event.target.value})
  }
  onphoneNumberChange= event => {
    this.setState({phoneNumber: event.target.value})
  }



  render() {
    const {username, password,email, showSubmitError, errorMsg,phoneNumber} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Link to="/" />
    }
    return (
      <div className="register-page-container">
        <div className="register-card-container">
          <img
            alt="register image"
            className="register-page-image"
            src="https://img.freepik.com/free-vector/business-people-writing-agreement-shaking-hands-tiny-man-with-magnifying-glass-researching-checklist-document-clipboard-paper-flat-vector-illustration-survey-paperwork-management-concept_74855-21676.jpg"
          />
          <div className="register-form-card">
           
           <div className="register-heading-card">
            <a href ='/' className="go-back"><IoIosArrowRoundBack className="back-icon"/></a>
           <h1 className="register-heading">Register</h1>
           </div>
            <form onSubmit={this.onformSubmit} className="form-card">
              <div className="form-label-div">
                <label className="register-form-label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  onChange={this.onusernameChange}
                  value={username}
                  className="register-form-input"
                  type="text"
                  id="username"
                />
              </div>
              <div className="form-label-div">
                <label className="register-form-label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  onChange={this.onpasswordChange}
                  value={password}
                  className="register-form-input"
                  type="password"
                  id="password"
                />
             
              </div>
              <div className="form-label-div">
                <label className="register-form-label" htmlFor="email">
                  EMAIL
                </label>
                <input
                  onChange={this.onemailChange}
                  value={email}
                  className="register-form-input"
                  type="text"
                  id="email"
                />
             
              </div>
              <div className="form-label-div">
                <label className="register-form-label" htmlFor="phone">
                  PHONE 
                </label>
                <input
                  onChange={this.onphoneNumberChange}
                  value={phoneNumber}
                  className="register-form-input"
                  type="tel"
                  id="phone"
                />
                 {showSubmitError ? (
                  <p className="errorMsg">{errorMsg}</p>
                ) : null}
             
              </div>
             
              <button type="submit" className="register-button">
                Register
              </button>

            </form>
           
              </div>
        </div>
        
      </div>
    )
  }
}

export default Register