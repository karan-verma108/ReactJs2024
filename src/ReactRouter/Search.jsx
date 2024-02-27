import React, { useState } from 'react'
import SearchResult from './SearchResult'

const Search = () => {

    const [typedData, setTypedData] = useState('');

    const changeEvent = (e) => {
        const typedValue = e.target.value;
        // console.log(typedValue);
        setTypedData(typedValue);
    }

    return (
        <>
            <div className='search_div'>
                <input type="text" placeholder='Search anything' value={typedData} onChange={changeEvent} />
                <SearchResult imgValue={typedData} />
            </div>
        </>
    )
}

export default Search