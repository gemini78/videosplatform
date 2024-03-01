import React, { useState } from 'react'
import './Navbar.scss'
import { GrMenu, GrSearch, GrGift, GrNotification } from "react-icons/gr";
import Logo from '../../images/logo.png';

const Navbar = () => {

  const [navBlack, setNavBlack] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true): setNavBlack(false)
  }

  useState(()=>{
    document.addEventListener("scroll", transitionNav)
  })

  const handleToggle = ()=> {
    console.log(toggleMenu);
    
    toggleMenu ? setToggleMenu(false): setToggleMenu(true)
  }
  
  return (
    <div className={`nav ${(navBlack || toggleMenu ) && "nav--black"} ${toggleMenu && "show"} `}>
        <button onClick={handleToggle} className='nav__burger'><GrMenu size={20} /></button>
        <img className='nav__logo' src={Logo} alt="logo" />
        <nav className='nav__links'>
            <a className='nav__link' href="/">Accueil</a>
            <a className='nav__link' href="/">Séries</a>
            <a className='nav__link' href="/">Films</a>
        </nav>
        <div className="nav__actions">
            <a className='nav__action' href="/"><GrSearch size={20} /></a>
            <a className='nav__action' href="/">DIRECT</a>
            <a className='nav__action' href="/"><GrGift size={20} /></a>
            <a className='nav__action' href="/"><GrNotification size={20} /></a>
            <a className='nav__action' href="/">
                <img src="./images/avatar.png" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Navbar