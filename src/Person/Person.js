import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = props => {
    const {
        name,
        age,
        changed,
        clickName
    } = {...props};

    const persontyle = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    }
    return (
        <div className="person" style={persontyle}>
          <p onClick={clickName}>I am {age} years old and my name is {name}</p>
          <input type="text" value={props.name} onChange={changed} />
        </div>
    );
};

export default Radium(person);