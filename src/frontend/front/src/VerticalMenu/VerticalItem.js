import React, {useContext} from 'react';
import Context from '../Context';

function VerticalItem({option}){
    const { pickOption } = useContext(Context);
    const classes = [];

    if(option.picked){
        classes.push('picked');
    }
    
    return (
        <li className='vertical-item' onClick={pickOption.bind(null, option.id)}>
            <span className={classes.join(' ')}>
                {option.title}
            </span>
        </li>
    )
}

export default VerticalItem