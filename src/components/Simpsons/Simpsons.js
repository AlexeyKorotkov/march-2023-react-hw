import React from 'react';
import './Simpsons.css';
const Simpsons = ({name,surname,age,info,photo}) => {

    return (
        <div className={'family'}>
            <h2>{name} {surname} {age} {info} </h2>
            <img src={photo} alt={name}/>

        </div>
    );
};

export default Simpsons;