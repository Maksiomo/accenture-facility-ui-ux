import React, {useContext} from 'react';
import Context from '../Context';

function InfoItem({info}){
    let color;
    const { pickInfo } = useContext(Context);

    if(info.averageDangerTier > 1){
        color = 'rgb(200, 0, 0)';
    }
    else{
        color = 'rgb(255,' + (255 - (info.averageDangerTier*255)) + ','+ (255 - (info.averageDangerTier*255)) + ')';
    }
    return (
        <li className='info-item' style={{backgroundColor: color}} onClick={pickInfo.bind(null, info)}>
            <span>
                <strong>{info.problems[0].problem.elementName}</strong>
            </span>
        </li>
    )
}

export default InfoItem