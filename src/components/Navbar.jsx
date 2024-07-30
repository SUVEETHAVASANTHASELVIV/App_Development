import React from 'react';
import '../assets/css/navbar.css';
const Navbar =()=>
{
    return (
       <>
       <header className="navbody" role="banner">
        <div className="contain">
          <div className="name-logo">
            <div className="name">
              <h1><a href="/">Logistics</a></h1>
            </div>
          <div>
              <nav className="navbar" role="navigation">
                <ul className="list">
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="/">About Us</a></li>
                  <li className="active">
                    <a href="/">Services</a>
                    <ul className="dropdown">
                      <hr/>
                      <li><a href="/">Air Freight</a></li>
                      <li><a href="/">Ocean Freight</a></li>
                      <li><a href="/">Ground Shipping</a></li>
                      <li><a href="/">Warehousing</a></li>
                      <li><a href="/">Storage</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Industries</a></li>
                  <li><a href="/">Login</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
       </>
    )
}
export default Navbar