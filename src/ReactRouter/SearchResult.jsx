import React from 'react'

const SearchResult = (props) => {

    const img = `https://source.unsplash.com/600x400/?${props.imgValue}`;
    // const searchImg = `https://download.cnet.com/a/img/resize/5b7044258af09130cd0bdf910da24f22d2777a04/catalog/2017/11/29/8b6af44d-3be8-47e5-a931-75bca1b0c777/imgingest-1136771509381280571.png?auto=webp&fit=crop&width=64`;

    return (
        <>
            {/* {props.imgValue === '' ? <img src={searchImg} alt="search" /> : <img src={img} alt="search" />} */}
            {props.imgValue === '' ? null : <img src={img} alt="search" />}
        </>
    )
}

export default SearchResult