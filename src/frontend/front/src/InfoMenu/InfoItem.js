import React from 'react';

function InfoItem({info}){
    let color;
    if(info.dangerTier > 1){
        color = 'rgb(255,0,0)';
    }
    else{
        color = 'rgb(255,' + (255 - (info.dangerTier*255)) + ','+ (255 - (info.dangerTier*255)) + ')';
    }
    return (
        <li className='info-item' style={{backgroundColor: color}}>
            <span>
                {info.elementName}
                &nbsp;
                <strong>{info.legent}</strong>
            </span>
        </li>
    )
}

export default InfoItem