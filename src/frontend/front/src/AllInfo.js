import React from 'react';

function AllInfo({item}) {
    return (
        <p>
            <strong>{item.elementName}</strong>
            <br/>
            {item.legend}
            <br/>
            {item.employeeId ? 'Зарос обработан сотрудником с ID: ' + item.employeeId : 'Никем не обработана'}
            <br/>
            Статус: {item.status}
            <br/>
            Опасность: {item.dangerTier}
        </p>
        
    )
}

export default AllInfo