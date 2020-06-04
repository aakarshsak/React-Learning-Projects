import React from 'react';

const userInput = ( props ) => {
    const style = {
        width : '70%',
        padding : '10px',
        borderRadius : '4px',
        textAlign : 'center',
        backgroundColor : 'grey',
        color : '#feefef'
    }
    
    
    return (    
        <div >
            <input style={style} type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
}

export default userInput;