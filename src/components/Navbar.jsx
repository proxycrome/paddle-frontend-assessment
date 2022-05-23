import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";


const Navbar = (props) => {
  return (
    <div className="Navbar">
        <h1 className="logo">METRICKS</h1>
        <div className="menu">
          <Link to="/about" className="link" style={{ color: props.color }}>ABOUT US</Link> 
          <Link to="#" className="link">BLOG</Link>
          <Link to="#"><button className="contact-btn">CONTACT US</button></Link> 
        </div>
    </div>
  )
}

export default Navbar