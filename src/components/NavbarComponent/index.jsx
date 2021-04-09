import React from 'react';
import './NavbarComponent.css';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const NavbarComponent = ({ navHidden }) => {

    

    return(
            <nav className={navHidden ?'navhidden' : 'navbar'}>
                <Link to="/">
                    <img src={Logo} alt=""/>
                </Link>
                
                <div>
                    <Link id="" to="/framed">Home</Link>
                    <Link id="" to="/showcase">Showcase</Link>
                    <Link id="" to="/about">About</Link>
                </div>
            </nav>
        
    )
}

export default NavbarComponent;