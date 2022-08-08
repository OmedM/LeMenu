import { useState } from 'react';
import '../stylesheets/add-restaurant.css'

function AddRestaurant() {
    const [menuField, setMenuField] = useState();

    return (
        <div className='add_restaurant_main_section'>
            <form>
                <label>Restaurant Name:
                    <input
                    /><br/>
                </label>
                <label>Restaurant description:
                    <input
                    /><br/>
                </label>
                <label>Image:
                    <input
                    type="file"
                    /><br/>
                </label>

                <hr/>

                <h1>Menu</h1>
                <label>Dish Name
                    <input
                    />
                </label>
                <label>Dish Price:
                    <input
                    /> $<br/>
                </label>
                <button>+</button>
            </form>
        </div>
    )
}

export default AddRestaurant