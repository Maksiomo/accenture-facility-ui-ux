import React from 'react';

function InfoItem({info}){
    const classes = ['info-item'];

    if(info.dangerTear === 'warning'){
        classes.push('warning');
        classes.push('warning:hover');
    }

    if(info.dangerTear === 'danger'){
        classes.push('danger');
        classes.push('danger:hover');
    }
    
    return (
        <li className={classes.join(' ')}>
            <span>
                {info.description}
                &nbsp;
                <strong>{info.data}</strong>
            </span>
        </li>
    )
}

export default InfoItem