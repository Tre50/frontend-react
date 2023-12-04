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
      
      <nav >
        <ul>
          <li >
            <a  href="/Home">Welcome To The Mayne Course Recipe Builder </a>
          </li>
          {!loggedIn && 
              <>
                {/* <li ><a href="/signup">Signup</a></li>
                <button  type="submit" style={{backgroundColor:'skyblue'}}>Signup</button>     */}
              </>
          }
        </ul>
      </nav>
    </div>
  )
}