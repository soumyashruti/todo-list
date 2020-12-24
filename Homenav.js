import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome, FaUser, FaSignInAlt} from 'react-icons/fa';


const btn ={
    
  paddingLeft: "900px",
 
}

export default function HomeNavbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">To Do Application</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/home" class="nav-link active" aria-current="page" href="#"><FaHome/>Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/userLogin" class="nav-link  active" href="#" tabindex="-1" aria-disabled="true"><FaUser/>User</Link>
        </li>
        <li class="nav-item">
          <Link to="/Signup" class="nav-link active" href="#" style={btn}><FaSignInAlt/>SignUp</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
        