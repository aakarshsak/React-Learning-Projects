import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return <div className='UserOutput'>
        <p>Hello there!!! I am  {props.name}</p>
        <p>This is my first ever react project.</p>
        {props.children}
    </div>
}

export default userOutput;