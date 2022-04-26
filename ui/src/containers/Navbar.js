import React from 'react'

export default function Navbar(props) {
  return (
   // implementation of Navbar container
   <>
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href='/'>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href='/'>About Us</a>
                </li>
            </ul>
            </div>
            
        </div>
    </nav>
   </>
  )
}
