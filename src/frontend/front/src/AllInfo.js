import React from 'react';

function AllInfo({item}) {
    return (
        <p>
            <strong>{item.problems[0].problem.elementName}</strong>
            <br/>
            <br/>
            {item.problems.sort(function(a, b){return Date.parse(b.date) - Date.parse(a.date)}).map(e => {
                return (<div>
                    <div style={{backgroundColor: 'rgb(255,' + (255 - (e.problem.dangerTier*255*0.01)) + ','+ (255 - (e.problem.dangerTier*255*0.01)) + ')',
                    borderRadius: '5%', border: '1px solid #777'}}>
                        {e.problem.legend}
                        <br/>
                        {e.date}
                        <br/>
                        {(e.problem.employeeId ? '\nЗарос обработан сотрудником с ID: ' + item.employeeId : '\nНикем не обработана')}
                        <br/>
                        {'Статус: ' + e.problem.status}
                        <br/>
                        {'Опасность: '+ e.problem.dangerTier}
                        <br/>
                    </div>
                    <br/>
                </div>)
                })}
            <br/>
        </p>
        
    )
}

export default AllInfo