import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome, FaSignOutAlt} from 'react-icons/fa';

const btn ={
    
    paddingLeft: "900px",
   
  }
export default function UserNavbar() {
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
                                <Link to="/bookBorrow" class="nav-link  active" href="#" >ToDo</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/home" text-align="right" class="nav-link  active"  href="#" tabindex="-1" aria-disabled="true" style={btn}><FaSignOutAlt/>LogOut</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        
    )
}


