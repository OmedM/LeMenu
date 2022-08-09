import { memo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../stylesheets/restaurants-page.css'
import Card from '../components/restaurants-card.js';
import AddRestaurant from '../components/add-restaurant.js';
import restaurantsData from '../data/restaurants.json';

function Restaurants() {
    return (      
            <div className='main_section'>  
                <Link to='/add-restaurant'>
                    <button className='add_btn'>
                        Add Restaurant
                    </button>
                </Link>

            {restaurantsData && restaurantsData.map((restaurant) => (
                <Card restaurant={restaurant}/>
            ))}
            </div>
    )
}

export default memo(Restaurants);