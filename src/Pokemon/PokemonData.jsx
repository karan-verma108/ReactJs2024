import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonData = () => {

    const [num, setNum] = useState(1);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [img, setImg] = useState();
    const [totalPokemonCount, setTotalPokemonCount] = useState(0);
    const [pokemonOptions, setPokemonOptions] = useState([]);

    useEffect(() => {
        const getTotalPokemonCount = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/`);
            setTotalPokemonCount(res.data.count);
            console.log(res.data.count);
        }
        getTotalPokemonCount();
    });

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
            console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            setImg(res.data.sprites.front_shiny);
        }
        getData();
    },[num]);

    useEffect(() => {
        const options = Array.from({ length: totalPokemonCount }, (_, index) => index + 1);
        setPokemonOptions(options);
    }, [totalPokemonCount])

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', boxShadow: '4px 4px 8px black', borderRadius: '10px', margin: '100px auto', width: '58%' }}>
                <h3>You chose {num} value</h3>
                <select value={num} onChange={(e) => { setNum(e.target.value) }}>
                    {pokemonOptions.map((option) => {
                        return <option key={option} value={option}>
                            {option}
                        </option>
                    })}
                </select>
                <h2>My name is {name}</h2>
                <h2>I have {moves} moves 😏</h2>
                <img src={img} alt="img" />
            </div>
        </>
    )
}

export default PokemonData;