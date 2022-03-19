import React from 'react';
import './SingleCountry.css'
const SingleCountry = (props) => {
    return (
        <div className='country'>
        <div className='head'>
            <h4>Name: {props.country.name.common}</h4>
            <img src={props.country.coatOfArms.png} className='coatOA'  alt="" srcset="" ></img>
        </div> 
            
            <img src={props.country.flags.png}  alt="" srcset="" ></img>
            <p>Population: {props.country.population}</p>
            <p><small>Area: {props.country.area}</small></p>
        </div>
    );
};

export default SingleCountry;