import { useEffect, useState } from "react"
import React from "react"

export default function Header(){
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const userLS = localStorage.getItem('myUser')

    if(userLS) setLoggedIn(true)
  },[])

  return (
    
    <div >
      <br></br>
      <br></br>
      <nav >
        <ul>
          {/* <li >
            <a  href="/Home">Welcome To The Mayne Course Recipe Builder </a>
          </li> */}
          {!loggedIn && 
              <div >
                <li ><a href="/signupform">SignupForm</a></li>
                <li><a href ="/recipe">Find Recipes</a></li>
                {/* <button  type="submit" style={{backgroundColor:'skyblue'}}>Signup</button>     */}
              </div>
          }
        </ul>
      </nav>
    </div>
  )
}