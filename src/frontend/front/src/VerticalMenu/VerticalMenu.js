import React from 'react';
import VerticalItem from './VerticalItem';

function VerticalMenu(props){
    return (
        <ul className='vertical-menu'>
            {props.options.map(option =>{
                return (
                    <VerticalItem
                        option = {option}
                        key = {option.id}
                    />
                )
            })}
        </ul>
    )
}

export default VerticalMenu