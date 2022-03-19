import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Country.css'

const Country = () => {
    const [countries,setcountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])
    return (
        <div>
            <h1>Number of countries:{countries.length}</h1>
            <div className='country-box'>
            {
                countries.map(country=><SingleCountry 
                country={country}
                key={country.cca3}
                ></SingleCountry>)
            }
            </div>
        </div>
    );
};

export default Country;