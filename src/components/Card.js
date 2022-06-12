import React from "react";

const Card = (props) => {
    const {country} = props; 
    return (
        <li className="card">
            <img src={country.flags.png} alt="flag" />
            <div className ="infos-container">
                <ul>
                    <li>{country.name.common}</li>
                    <li>{country.population}</li>
                </ul>
            </div>
        </li>
    )
}

export default Card;