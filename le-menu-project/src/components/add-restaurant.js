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
            <h1>Add your restaurant's details</h1>
            <form className='form'>
                <div className='form_input_div'>
                    <label className='form_label'>Restaurant Name:
                        <input
                        className='form_input'
                        />
                    </label>
                </div>
                <div className='form_input_div'>
                    <label className='form_label'>Restaurant description:
                        <input
                        />
                    </label>
                </div>
                <div className='form_input_div'>
                    <label className='form_label'>Image:
                        <input
                        type="file"
                        />
                    </label>
                </div>
                

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
                <br/><br/>
                <button type='submit' className='form_submit_btn'>Submit</button>
            </form>
        </div>
    )
}

export default AddRestaurant;