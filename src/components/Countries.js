import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';


const Countries = () =>{
    const[data,setData] = useState([]);

    useEffect(() => {
         axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => setData(res.data));

    },[]);
    const dataListed = data.map((country) => (
        <Card country={country} key={country.name.common}/>
        
    ))
    return (
        <div className="countries">
            <ul className ="countries-list">
                {dataListed}
            </ul>
        </div>
    )
}

export default Countries;