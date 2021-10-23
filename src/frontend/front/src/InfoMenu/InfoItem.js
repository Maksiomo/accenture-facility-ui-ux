import React, {useContext} from 'react';
import Context from '../Context';

function InfoItem({info}){
    let color;
    const { pickInfo } = useContext(Context);

    if(info.dangerTier > 1){
        color = 'rgb(200, 0, 0)';
    }
    else{
        color = 'rgb(255,' + (255 - (info.dangerTier*255)) + ','+ (255 - (info.dangerTier*255)) + ')';
    }
    return (
        <li className='info-item' style={{backgroundColor: color}} onClick={pickInfo.bind(null, info)}>
            <span>
                {info.elementName}
                &nbsp;
                <strong>{info.legent}</strong>
            </span>
            {info.elementID ? '☑' : '☒'}
        </li>
    )
}

export default InfoItem