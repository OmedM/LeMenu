import { memo } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/restaurants-page.css'
import Card from '../components/restaurants-card.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRestaurant from '../components/add-restaurant.js'

const restaurants = [
    {
        name: 'Sangar',
        description: 'dsklakfajdsklakjfa',
        imgLocation: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
        menu: [
            {
                dishName: 'pizza',
                dishPrice: 15,
            },
            {
                dishName: 'kabab',
                dishPrice: 5,
            }
        ]
    }
];

function Restaurants() {
    return (      
            <div className='main_section'>  
                <Link to='/add-restaurant'>
                    <button className='add_btn'>
                        Add Restaurant
                    </button>
                </Link>

            {restaurants.map((restaurant) => <Card restaurant={restaurant}/>)}
            </div>
    )
}

export default memo(Restaurants);