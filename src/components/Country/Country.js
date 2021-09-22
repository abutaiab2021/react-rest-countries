import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag, capital, population} = props.country || { } ;
    // console.log(props.country)
    return (
        <div className="country">
            <h1>Country Name : {name}</h1>
            <img src={flag} alt="" />
            <p>Capital : {capital} , Population : {population}</p>
        </div>
    );
};

export default Country;