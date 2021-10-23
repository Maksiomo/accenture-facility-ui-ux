import React, {useContext} from 'react';
import Context from './Context';

function SearchInfo(){
    const { updateInfo } = useContext(Context);  
    return (
        <div className='search'>
            <form>
                <input type="text" name="id" placeholder="Напишите id для поиска" onChange={updateInfo(' ')} />
                <button type="button" onClick={updateInfo(' ')}>Поиск</button>
            </form>
        </div>
    )
}

export default SearchInfo