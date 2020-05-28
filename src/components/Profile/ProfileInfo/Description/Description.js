import React from 'react';
import classes from './Description.module.css';

const Description = (props) => {
    return (
        <div>
            <blockquote>{props.quote}</blockquote>
        </div>);
}

export default Description;