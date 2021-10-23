import React from 'react';
import LocalItemThree from './LocalItemThree';

function LocalMenuThree (props){
    return (
        <ul className='local-menu-two'>
            {props.items.map(item =>{
                return (
                    <LocalItemThree 
                        item = {item}
                        key = {item.id}
                    />
                )
            })}
        </ul>
    )
}

export default LocalMenuThree 