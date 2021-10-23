import React from 'react';

function AllInfo({item}) {
    return (
        <p>
            <strong>{item.problems[0].problem.elementName}</strong>
            <br/>
            
            <br/>
        </p>
        
    )
}

export default AllInfo