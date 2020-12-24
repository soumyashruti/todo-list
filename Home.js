import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 
import HomeNavbar from '../../navigationbar/Homenav'

export default function Home() {
    return (
  
        <>
          <div>  
            <HomeNavbar/>
          </div>
        
        <div>
            <h1 id="home">Welcome to Do Apllication</h1>
            
        </div>  
        
       </>
    )
}

