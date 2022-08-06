import { memo } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav-bar.css';
import logo from '../figures/logo-white.png';
import navBtn from '../figures/nav-btn.png';

function Nav() {
    return (
        <nav className='nav'>
            <Link to="/"><img className='nav_logo' src={logo}/></Link>
            <ul className='nav_items'>
                <li><Link to="/restaurants">Restaurants</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className='nav_btn_div'>
                <img src={navBtn} className='nav_btn'/>
            </div>
        </nav>
    )
  }

export default memo(Nav);