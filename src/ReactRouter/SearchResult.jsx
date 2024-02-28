import React from 'react'

const SearchResult = (props) => {

    const img = `https://source.unsplash.com/600x400/?${props.imgValue}`;
    const searchImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdk4ZIKVdQaMMj390S19JlqK-mHrbpgs6-gA&usqp=CAU`;

    return (
        <>
            {props.imgValue === '' ? <img id='demoImg' src={searchImg} alt="search" /> : <img id='realImg' src={img} alt="search" />}
            {/* {props.imgValue === '' ? null : <img src={img} alt="search" />} */}
        </>
    )
}

export default SearchResult