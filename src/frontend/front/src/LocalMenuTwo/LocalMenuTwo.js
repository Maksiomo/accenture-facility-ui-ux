import React from 'react';
import LocalItemTwo from './LocalItemTwo';

function LocalMenuTwo(props){
    return (
        <ul className='local-menu-two'>
            {props.items.map(item =>{
                return (
                    <LocalItemTwo
                        item = {item}
                        key = {item.id}
                    />
                )
            })}
        </ul>
    )
}

export default LocalMenuTwo