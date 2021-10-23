import React from 'react';

function InfoItem({info}){
    const color = 'rgb(255,' + (255 - (info.dangerTear/100*255)) + ','+ (255 - (info.dangerTear/100*255)) + ')';
    return (
        <li className='info-item' style={{backgroundColor: color}}>
            <span>
                {info.description}
                &nbsp;
                <strong>{info.data}</strong>
            </span>
        </li>
    )
}

export default InfoItem