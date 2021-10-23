import React from 'react';
import InfoItem from './InfoItem';

function InfoMenu(props){
    return (
        <ul className='info-menu'>
            {props.infos.map(info =>{
                return (
                    <InfoItem
                        info = {info}
                        key = {info.elementId}
                    />
                )
            })}
        </ul>
    )
}

export default InfoMenu