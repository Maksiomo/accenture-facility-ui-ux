import React from "react";

function GraphicsMenu(props) {
    return (
        <ul className='graphics'>
            {props.graphics.map(graphic=>{
                <LineGrphics 
                    data = {graphic}
                    key = {graphic.parentMetric}
                />
            })}
        </ul>
    )
}

export default GraphicsMenu