import React from 'react';


import {Link} from 'react-router-dom'
import UserNavbar from '../../../navigationbar/Usernav';


export default function toDo() 
{
    return (
        <>
			<div>
				<UserNavbar/>
			</div>
            <div>
        <table class="table table-hover">
        <thead class="table table-hover"> 
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Task</th>
            
        </tr>

        </thead>
	    <tbody>  
            <tr>
                <th scope="row">11</th>
                <td>soumya</td>
                <td>adding user</td>
            </tr>
            <tr>
                <th scope="row">12</th>
                <td>Keerthi</td>
                <td>deleting user</td>
            </tr>
            <tr>
                <th scope="row">13</th>
                <td>Preeti</td>
                <td>updating user</td>
            </tr>
            
	    </tbody>
    </table>
</div>
</>    
)
}




