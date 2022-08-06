import { memo } from 'react';
import '../stylesheets/nav-bar.css';
import logo from '../figures/logo-white.png';
import navBtn from '../figures/nav-btn.png';

function Nav() {
    return (
        <nav className='nav'>
            <a href='#'><img className='nav_logo' src={logo}/></a>
            <ul className='nav_items'>
                <li><a href='#'>Restaurants</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='nav_btn_div'>
                <img src={navBtn} className='nav_btn'/>
            </div>
        </nav>
    )
  }

export default memo(Nav);