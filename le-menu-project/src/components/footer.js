import { memo } from 'react';
import '../stylesheets/footer.css';
import logo from '../figures/logo-white.png';

function Footer() {
    return (
        <div className='footer_div'>
            <div>
                <ul className='footer_items'>
                    <li><a href='#'>Restaurants</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                    <hr className='hr'/>
                    <li><a href='https://github.com/OmedM/LeMenu'>Source Code</a></li>
                    <li><a href='https://www.figma.com/file/K7Wub7vHFySGFVxwrKzGA1/Untitled'>Design</a></li>
                </ul>
            </div>
            <div>
                <img src={logo} className='footer_logo'/>
            </div>
            <div className='footer_copyright'><p>Omed Muhammed | 2022 | ⓒ</p></div>
        </div>
    )
}

export default memo(Footer);