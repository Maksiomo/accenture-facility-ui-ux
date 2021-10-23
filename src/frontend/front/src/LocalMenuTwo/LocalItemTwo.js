import React, {useContext} from 'react';
import Context from '../Context';

function LocalItemTwo({item}){
    const { pickLocalItemTwo } = useContext(Context);
    const classes = [];

    if(item.picked){
        classes.push('picked');
    }
    
    return (
        <li className='local-item-two' onClick={pickLocalItemTwo.bind(null, item.id)}>
            <span className={classes.join(' ')}>
                {item.title}
            </span>
        </li>
    )
}

export default LocalItemTwo