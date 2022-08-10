import { useParams } from 'react-router-dom';
import restaurantsdata from '../data/restaurants.json';
import '../stylesheets/single-restaurant-page.css';

function SingleRestaurant() {
    const {id} = useParams();

    return (
        <div className='single_restaurant_main_section'>
            <h1 className='single_r_header'>{restaurantsdata[id].name}</h1>
            <p className='single_r_description'>{restaurantsdata[id].description}</p>

            <div className='single_r_hline'></div>
            
        </div>
    )
}

export default SingleRestaurant;