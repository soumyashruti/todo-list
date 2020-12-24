import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HomeNavbar from '../../navigationbar/Homenav';
import './Signup.css';

const initialState = {
    title:"",
    firstname :"",
    lastname:"",
    email:"",
    cemail:"",
    phno:"",
    password:"",
    cpassword:"",

    titleError:"",
    firstnameError :"",
    lastnameError:"",
    emailError:"",
    cemailError:"",
    phnoError:"",
    passwordError:"",
    cpasswordError:"",

}

export default class Signup extends Component {

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
    let titleError="";
    let firstnameError ="";
    let lastnameError="";
    let emailError="";
    let cemailError="";
    let phnoError="";
    let passwordError="";
    let cpasswordError="";

    if(!this.state.title){
        titleError = "must select the title"
    }

    if(!this.state.firstname) {
      firstnameError = "firstname cannot be empty";
    }

    if(!this.state.email.includes('@')){
      emailError = 'invalid email';
    }

    if(!this.state.cemail.includes('@')) {
        cemailError = 'invalid email';
    }
    if(!(this.state.cemail=== this.state.email)) {
        cemailError = 'email must match';
    }

    if(!(this.state.phno.length == 10)){
        phnoError = 'must contain 10 digits';
    }

    if(!(this.state.password.length >= 6)){
      passwordError = 'password maximum 6 characters'
    }

    if(!this.state.cpassword){
        cpasswordError = 'password maximum 6 characters'
      }
    
    if(!(this.state.cpassword === this.state.password)){
        cpasswordError = 'password must match'
    }


    if( titleError || firstnameError || lastnameError || emailError || cemailError
        || phnoError || passwordError || cpasswordError){
      this.setState({titleError, firstnameError, lastnameError, emailError, cemailError,
         phnoError, passwordError, cpasswordError});
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
    // if(window.confirm('form submitted!!!'))
    // {
    //   window.open('./UserLogin');
    // };
  };

    render() {
        return (
          <>
            <div>
              <HomeNavbar/>
            </div>
            <div>
                <nav id="navbar2" className="navbar navbar-expand-lg navbar-light bg-light" >

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
  
                </nav>

                <form id="formreg" class="rounded" onSubmit={this.handleSubmit}>
                <h3 id="reghead">Registration Details</h3>
                <div id="firstline">
                      <div class="col"> 
                      <label for="select">Title*</label>
                        <select class="form-control col-md-15" name="title" value={this.state.title} onChange={this.handleChange}>
                            <option>Title</option>
                            <option>Mr.</option>
                            <option>Ms.</option>
                            <option>Miss.</option>
                        </select>
                        <div style={{color:"red", fontSize:12}}>{this.state.titleError}</div>
                      </div>

                    <div class="col">
                    <label for="exampleInputEmail1">First Name*</label>
                        <input type="text" class="form-control " aria-describedby="emailHelp" placeholder="-- enter your first name --" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                        <div style={{color:"red", fontSize:12}}>{this.state.firstnameError}</div>
                    </div>

                    <div class="col">
                        <label for="inputEmail4">Last Name</label>
                        <input type="text" class="form-control col-md-15" placeholder="-- enter your last name --" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                        <div style={{color:"red", fontSize:12}}>{this.state.lastnameError}</div>
                    </div>
             </div>

                <div id="thirdline">
                <div class="col">
                <label for="exampleInputEmail1">Email address*</label>
                <input type="email" class="form-control " aria-describedby="emailHelp" placeholder="-- enter your E-mail --" name="email" value={this.state.email} onChange={this.handleChange}/>
                <div style={{color:"red", fontSize:12}}>{this.state.emailError}</div>
                    </div>
                    <div class="col">
                    <label for="exampleInputEmail1">Confirm Email address*</label>
                        <input type="email" class="form-control " aria-describedby="emailHelp" placeholder="-- re-enter your E-mail --" name="cemail" value={this.state.cemail} onChange={this.handleChange}/>
                        <div style={{color:"red", fontSize:12}}>{this.state.cemailError}</div>
                    </div>
                    <div class="col">
                    <label for="inputEmail4">Phone Number*</label>
                        <input type="text" class="form-control col-md-15"  placeholder="-- enter your phoneNumber --" name="phno" value={this.state.phno} onChange={this.handleChange}/>
                        <div style={{color:"red", fontSize:12}}>{this.state.phnoError}</div>
                    </div>
                </div>


                <div id="fourthline">
                <div class="col">
                    <label for="inputEmail4">Password*</label>
                        <input type="password" class="form-control col-md-13" placeholder="-- enter your password --" name="password" value={this.state.password} onChange={this.handleChange}/>
                        <div style={{color:"red", fontSize:12}}>{this.state.passwordError}</div>
                    </div>
                    
                    <div class="col">
                    <label for="inputEmail4">Confirm Password*</label>
                        <input type="password" class="form-control col-md-13" placeholder="-- re-enter your password --" name="cpassword" value={this.state.cpassword} onChange={this.handleChange}/>
                        <div style={{color:"red", fontSize:12}}>{this.state.cpasswordError}</div>
                    </div>
                </div>

                <div id="button1">
                   <Link to="/UserLogin">
                        <button id="btn1" type="submit" class="btn btn-outline-primary">Signup</button>
                  </Link>  
                </div>
                {/* <div id="button1">
                  <button id="btn2" type="submit" class="btn btn-outline-primary">Reset</button>
                </div> */}
            </form>
            
        </div>
        </>
        )
    }
}

