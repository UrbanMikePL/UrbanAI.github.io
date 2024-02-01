import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo (6).png'
import './navbar.css'


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className='urbangpt__navbar'>
      <div className='urbangpt__navbar-links'>
          <div className='urbangpt__navbar-links_logo'>
           <a href='#home'><img className='urban-ai' src={logo} alt="logo" /></a>
         </div>  
         <div className='urbangpt__navbar-links_nav'>
         <ul>
              <li><a href="#home">Home</a></li>
            <li><a href="#wurbanai">What is UrbanAI?</a></li>
           <li><a href="#possibility">Open AI</a></li>
           <li><a href="#features">Case Studies</a></li>
           <li><a href="#blog">Library</a></li>
              </ul>
         </div>
      </div>
       <div className='urbangpt__navbar-sign'>
       <p>Sign in</p>
       <button type='button'>Sign up</button>
       </div>
       <div className='urbangpt__navbar-menu'>
         {isMenuOpen
          ? <RiCloseLine color="#fff" size={34} onClick={() => toggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => toggleMenu(true)}/>}
         {isMenuOpen && (
          <div className='urbangpt__navbar-menu_nav scale-up-center'>
            <div className='urbangpt__navbar-menu_nav-links'>
              <ul>
              <li><a href="#home">Home</a></li>
            <li><a href="#wurbanai">What is UrbanAI?</a></li>
           <li><a href="#possibility">Open AI</a></li>
           <li><a href="#features">Case Studies</a></li>
           <li><a href="#blog">Library</a></li>
              </ul>
          
               <div className='urbangpt__navbar-menu_nav-links-sign'>
                   <p className='p-signin'>Sign in</p> 
                   <button type='button'>Sign up</button>
               </div>
            </div>
          </div>
         ) }
       </div>
    </div>
  )
}

export default Navbar