import React from 'react';
import PlanOptionItem from './PlanOptionItem';

function PlanOptionMenu(props){
    return (
        <ul className='vertical-menu'>
            {props.options.map(option =>{
                return (
                    <PlanOptionItem
                        option = {option}
                        key = {option.id}
                    />
                )
            })}
        </ul>
    )
}

export default PlanOptionMenu