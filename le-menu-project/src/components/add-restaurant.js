import React, { useState } from 'react';
import '../stylesheets/add-restaurant.css'

function AddRestaurant() {
    const [value, setValue] = useState({
        restaurantName: '',
        restaurantDescription: '',
        restaurantImage: ''
    });

    const handleNameInputChange = (event) => {
        setValue({...value, restaurantName: event.target.value})
    }

    const handleDescriptionInputChange = (event) => {
        setValue({...value, restaurantDescription: event.target.value})
    }

    const handleImageInputChange = (event) => {
        setValue({...value, restaurantImage: event.target.value})
    }

    return (
        <div className='add_restaurant_main_section'>
            <h1>Fill your restaurant's info</h1>
            <form className='form'>
                <div className='form_input_div'>
                    <label className='form_label'>Restaurant Name:
                        <input
                        className='form_input'
                        type="text"
                        value={value.restaurantName}
                        onChange={handleNameInputChange}
                        required
                        />
                    </label>
                </div>
                <div className='form_input_div'>
                    <label className='form_label'>Restaurant description:
                        <input
                        className='form_input'
                        type="text"
                        value={value.restaurantDescription}
                        onChange={handleDescriptionInputChange}
                        />
                    </label>
                </div>
                <div className='form_input_div'>
                    <label className='form_label'>Image URL:
                        <input
                        className='form_input'
                        type="text"
                        value={value.restaurantImage}
                        onChange={handleImageInputChange}
                        required
                        />
                    </label>
                </div>
                <hr/>
                <h1>Menu</h1>
                <button type='submit' className='form_submit_btn'>Submit</button>
            </form>
        </div>
    )
}

export default AddRestaurant;