import React, { useState } from 'react';
import './ButtonClick.css'
const ButtonClick = () => {
        const [values,setValue]=useState(0)
    const Clicked= ()=>{
        const value=values+1
        setValue(value)
    }
    return (
        <div className='button'>
            <button onClick={Clicked}>Click me!</button><p>{values}</p>
        </div>
    );
};

export default ButtonClick;