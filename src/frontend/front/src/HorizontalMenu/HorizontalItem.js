import React, {useContext} from 'react';
import Context from '../Context';

function HorizontalItem({item}){
    const { pickItem } = useContext(Context);
    const classes = [];

    if(item.picked){
        classes.push('picked');
    }
    
    return (
        <li className='horizontal-item' onClick={pickItem.bind(null, item.id)}>
            <span className={classes.join(' ')}>
                {item.title}
            </span>
        </li>
    )
}

export default HorizontalItem