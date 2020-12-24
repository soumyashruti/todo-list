import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HomeNavbar from '../../../navigationbar/Homenav';
import './UserLogin.css';

const initialState = {
    email:"",
    password:"",

    emailError:"",
    passwordError:"",
    
}

export default class UserLogin extends Component {

    state = initialState;
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
      ? event.target.checked
      :event.target.value
    });
  };

  validate = () => {
    let emailError="";
    let passwordError="";
    
    if(!this.state.email.includes('@')){
      emailError = 'invalid email';
    }

    if(!(this.state.password.length >= 6)){
      passwordError = 'password maximum 6 characters'
    }

    if( emailError || passwordError){
      this.setState({emailError, passwordError});
      return false;
    }
    return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
    console.log(this.state);
    //clear form
    this.setState(initialState);
    }
    {
      alert("form submitted");
    }
  };

    render() {
        return (
          <>
            <div>
              <HomeNavbar/>
            </div>
            <div>
                
                <form id="formreg" class="rounded" onSubmit={this.handleSubmit}>
                <h3 id="reghead">Login Here</h3>
                
                <div id="thirdline">
                  <div class="col">
                      <label for="exampleInputEmail1">Email address*</label>
                      <input type="email" class="form-control " aria-describedby="emailHelp" placeholder="-- enter your E-mail --" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <div style={{color:"red", fontSize:12}}>{this.state.emailError}</div>
                  </div>
                </div>

                <div id="fourthline">
                <div  class="col">
                    <label for="inputEmail4">Password*</label>
                        <input type="password" class="form-control col-md-13" placeholder="-- enter your password --" name="password" value={this.state.password} onChange={this.handleChange}/>
                        <div style={{color:"red", fontSize:12}}>{this.state.passwordError}</div>
                </div>
                </div>
                <Link to="/ToDo">
                <div id="button1">
                    <button id="btn1" type="submit" class="btn btn-outline-primary">Login</button>
                </div>
                </Link>
                
            </form>
            
        </div>
        </>
        )
    }
}
