import React, { useState } from 'react';
import '../stylesheets/add-restaurant.css';
import restaurantsData from '../data/restaurants.json';

function AddRestaurant() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        JSON.parse(inputs);
    }

    return (
        <div className='add_restaurant_main_section'>
            <h1>Fill your restaurant's info</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form_input_div'>
                    <label className='form_label'>Restaurant Name:
                        <input
                        className='form_input'
                        type="text"
                        name="restaurantName"
                        value={inputs.restaurantName || ""}
                        onChange={handleChange}
                        required
                        />
                    </label>
                </div>
                <div className='form_input_div'>
                    <label className='form_label'>Restaurant description:
                        <input
                        className="form_input"
                        type="text"
                        name="restaurantDescription"
                        value={inputs.restaurantDescription || ""}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='form_input_div'>
                    <label className='form_label'>Image URL:
                        <input
                        className='form_input'
                        type="text"
                        name="restaurantImage"
                        value={inputs.restaurantImage || ""}
                        onChange={handleChange}
                        required
                        />
                    </label>
                </div>
                <hr/>
                <h1>Menu</h1>
                <input type="submit" className='form_submit_btn'/>
            </form>
        </div>
    )
}

export default AddRestaurant;