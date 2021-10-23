import React from 'react';

function AllInfoLoad({item}) {
    return (
        <div className='all-info'>
            <strong>{item.problems[0].problem.elementName}</strong>
            <br/>
            {item.averageDangerTier}
            <br/>
            {item.problems.sort(function(a, b){return Date.parse(b.date) - Date.parse(a.date)}).map(e => {
                return (
                    <div style={{backgroundColor: 'rgb(255,' + (255 - (e.problem.dangerTier*255*0.05)) + ','+ (255 - (e.problem.dangerTier*255*0.05)) + ')',
                    borderRadius: '5%', border: '1px solid #777', width: 'auto', height: 'auto', margin: '5px'}}>
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
                </div>)
                })}
        </div>
        
    )
}

export default AllInfoLoad