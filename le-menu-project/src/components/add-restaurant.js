import React, { useState } from 'react';
import '../stylesheets/add-restaurant.css'

function AddRestaurant() {
    const [menuField, setMenuField] = useState([{dishName: ''}]);

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...menuField];
        list[index][name] = value;
        setMenuField(list);
    }

    const addNewField = () => {
        setMenuField([...menuField, {dishName: ''}]);
    }
    
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
                {
                    menuField.map((x, i) => {
                        return (
                            <>
                                <input onChange={e => handleInputChange(e, i)}/>
                            </> 
                        )
                    })
                }
                <button
                onClick={addNewField}
                >+</button>
            </form>
        </div>
    )
}

export default AddRestaurant;