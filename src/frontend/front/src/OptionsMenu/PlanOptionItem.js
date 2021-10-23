import React, {useContext} from 'react';
import Context from '../Context';

function PlanOptionItem({option}){
    const { pickPlanOption } = useContext(Context);
    const classes = [];

    if(option.picked){
        classes.push('picked');
    }
    
    return (
        <li className='vertical-item' onClick={pickPlanOption.bind(null, option.id)}>
            <span className={classes.join(' ')}>
                {option.title}
            </span>
        </li>
    )
}

export default PlanOptionItem