import React from 'react';

function InfoItem({info}){
    const color = 'rgb(255,' + (255 - (info.dangerTear/100*255)) + ','+ (255 - (info.dangerTear/100*255)) + ')';
    const borderColor = '1px solid rgb(77,' + (255 - (info.dangerTear/100*255))*0.3 + ','+ (255 - (info.dangerTear/100*255))*0.3 + ')';
    return (
        <li className='info-item' style={{backgroundColor: color, border: borderColor}}>
            <span>
                {info.description}
                &nbsp;
                <strong>{info.data}</strong>
            </span>
        </li>
    )
}

export default InfoItem