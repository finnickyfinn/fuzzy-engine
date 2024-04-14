import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"
import BaseTransFull from '../Assets/BaseTransFull.png'
import ContactModal from './ContactModal.js'




function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
    <div className="navbar bg-zinc-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/About'>About Us</Link></li>
          <li><Link to ='/Services'>Services</Link></li>
          <li><a>Contact Us</a></li>
        </ul>
      </div>
      <Link to='/'className="btn w-52 h-24 btn-ghost"><img className="w-full h-full" src= {BaseTransFull}></img></Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link className='hover:scale-110' to ='/'>Home</Link></li>
        <li><Link className='hover:scale-110' to ='/About'>About Us</Link></li>
        <li><Link className='hover:scale-110' to ='/Services'>Services</Link></li>
        <li><a onClick={openModal} className=" hover:scale-110 rounded">Contact Us</a>
        <ContactModal isOpen={isOpen} closeModal={closeModal} /></li>
      </ul>
    </div>
    <div className="navbar-end pr-5">
    <button className="btn btn-outline hover:scale-110">Book Appointment</button>
    </div>
  </div>
  </>
  );
}

export default Header;
