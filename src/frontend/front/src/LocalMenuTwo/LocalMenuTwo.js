import React from 'react';
import LocalItemTwo from './LocalItemTwo';

function LocalMenuTwo(props){
    return (
        <ul className='horizontal-menu'>
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