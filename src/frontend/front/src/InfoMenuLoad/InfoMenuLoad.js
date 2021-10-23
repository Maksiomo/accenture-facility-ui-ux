import React from 'react';
import InfoItemLoad from './InfoItemLoad';

function InfoMenuLoad(props){
    return (
        <ul className='info-menu'>
            {props.infos.map(info =>{
                return (
                    <InfoItemLoad
                        info = {info}
                        key = {info.objectId}
                    />
                )
            })}
        </ul>
    )
}

export default InfoMenuLoad