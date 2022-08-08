import { memo } from 'react';
import '../stylesheets/restaurants-card.css';

function Card(props) {
    const img = props.restaurant.imgLocation;

    return (
        <div className='card'>
            <div className='card_ldiv'>
                <img src={img} className='card_img'/>
            </div>
            <div className='card_rdiv'>
                <h3 className='card_header'>{props.restaurant.name}</h3>
                <p className='card_txt'>{props.restaurant.description}</p>
            </div>
        </div>
    )
}

export default memo(Card);