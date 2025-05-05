import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { Link } from 'react-router-dom';
import "../style/navbar.css";

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-secondary rounded-bottom w-75 mx-auto justify-content-between px-3 ">
            <Link to={"/"} className="navbar-brand btn btn-lg"><h1><FaShoppingCart /><span className='m-3 gradient-text'>Product Store</span></h1></Link>
            <Link to={"/create"} className="navbar-brand btn btn-lg"><h1><MdAddBox /></h1></Link>
        </nav>
    </>
  )
}

export default Navbar;