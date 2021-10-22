import React from 'react';
import HorizontalItem from './HorizontalItem';

function HorizontalMenu(props){
    return (
        <ul className='horizontal-menu'>
            {props.items.map(item =>{
                return (
                    <HorizontalItem
                        item = {item}
                        key = {item.id}
                    />
                )
            })}
        </ul>
    )
}

export default HorizontalMenu