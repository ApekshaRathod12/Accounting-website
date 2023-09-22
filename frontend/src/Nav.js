
import React  , {useState}from "react";
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from './images/1.png';
import { GiHamburgerMenu } from "react-icons/gi";


function Nav() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className='nav-container'>
    <div className='nav-left'>
    <img src={logo} alt="/" className='logo'></img>
    <h2 className='nav-heading'>XYZ</h2>
    </div>


    
    <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
    <ul className='nav-ul'>
    
    <li className='nav-li'>
    <Link to = "/" style={{textDecoration:"none" , color:"black" , alignItems:'center'}}>Home</Link>
    </li>
    <li className='nav-li'>
    <Link to = "/contact" style={{textDecoration:"none" , color:"black"}}>Contact</Link>
    </li>
</ul>
    </div>

    
    
    <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        

    </div>
  )
}

export default Nav;