import React, { useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import PropTypes from 'prop-types';


const Button = ({country}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(true);
    }

    if (show){
        return (<SingleCountry country={country}></SingleCountry>)
    } else {
        return (<button onClick={handleClick}>Show</button>)
    }
   
};

export default Button;