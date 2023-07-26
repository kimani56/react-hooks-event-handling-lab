// Code Keypad Component Here
import React from 'react';

function Keypad (){
    const changeFired = (e) => {
       
        console.log('Entering password...');
    };

    return (
        <div>
            <label htmlFor='passwordInput'>Enter Password</label>
<input type ="password" id='passwordInput' onChange ={changeFired}/>

        </div>
    );
}

export default Keypad;