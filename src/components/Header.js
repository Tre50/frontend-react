import { useEffect, useState } from "react";
import React from "react";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userLS = localStorage.getItem("myUser");

    if (userLS) setLoggedIn(true);
  }, []);

  return (
    <div>
      <br />
      <br />
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <ul style={{ listStyle: "none", display: "flex", alignItems: "center" }}>
          {/* <li>
            <a href="/Home">Welcome To The Mayne Course Recipe Builder </a>
          </li> */}
          {!loggedIn && (
            <div style={{ display: "flex" }}>
              <li style={{ margin: "0 10px" }}>
                <a href="/recipe">Find Recipes</a>
              </li>
            </div>
          )}
        </ul>
        {!loggedIn && (
          <div>
            <a href="/signupform">SignupForm</a>
          </div>
        )}
      </nav>
    </div>
  );
}
