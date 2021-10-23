import React from 'react';
import InfoItem from './InfoItem';

function InfoMenu(props){
    return (
        <ul className='info-menu'>
            {props.infos.map(info =>{
                return (
                    <InfoItem
                        info = {info}
                        key = {info.objectId}
                    />
                )
            })}
        </ul>
    )
}

export default InfoMenu