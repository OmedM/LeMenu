import { memo } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/restaurants-card.css';

function Card(props) {
    return (
        <Link to={`/restaurants/${props.restaurant.id}`}>
            <div className='card'>
                <div className='card_ldiv'>
                    <img src={props.restaurant.imgLocation} className='card_img'/>
                </div>
                <div className='card_rdiv'>
                    <h3 className='card_header'>{props.restaurant.name}</h3>
                    <p className='card_txt'>{props.restaurant.description}</p>
                </div>
            </div>
        </Link>
        
    )
}

export default memo(Card);