import { memo } from 'react';
import '../stylesheets/home-page.css';
import logo from '../figures/logo.png';
import slide2_img from '../figures/slide2-img.jpeg'

function Home() {
    return (
        <>
            <div className='hero_section'>
                <img src={logo} className='hero_logo'/>
                <div className='hero_hline'></div>
                <p className='hero_text'>All menus, one place</p>
            </div>
            <div className='slide2'>
                <div className='slide2_ldiv'>
                    <p className='slide2_txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis pellentesque nulla, eu dignissim tellus interdum eu. Etiam cursus id felis id auctor. Aenean dictum malesuada enim ac volutpat. Suspendisse vehicula eleifend felis. Quisque ullamcorper tristique ullamcorper.</p>
                    <button type='button' className='slide2_btn'>Go to menus now</button>
                </div>
                <div className='slide2_rdiv'>
                    <img src={slide2_img} className='slide2_img'/>
                </div>
            </div>
        </>
    )
}

export default memo(Home);