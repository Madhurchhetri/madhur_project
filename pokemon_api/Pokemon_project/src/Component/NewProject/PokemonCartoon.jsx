import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';

const PokemonCartoon = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loding , setLoding] = useState(true)
    const [error , setError] = useState(null)
    const [search ,setSearch] = useState('')

    const API = 'https://pokeapi.co/api/v2/pokemon?limit=24'

    const fetchPokemon = async ()=>{
        try{
           const res = await fetch(API);
           const data = await res.json();
        //    console.log(data);
           const detailPokemonData = data.results.map(async(currData)=>{
            // console.log(currData.url);
            const res = await fetch(currData.url);
            const data = await res.json();
            return data;
           })
        //    console.log(detailPokemonData);
           
           const detaileResponse = await Promise.all(detailPokemonData)
           console.log(detaileResponse);
           
           setPokemons(detaileResponse)
           setLoding(false);
           

        }catch(error){
            console.log(error);
            setLoding(false);
            setError(error)
            
        }
    }

    useEffect(()=>{
        fetchPokemon()
    },[])

    if (loding){
       return <div>
                <h1>loading....</h1>
              </div>
    }
    if (error) {
        return <div>
            <h1>{error.message}</h1>
        </div>
    }

    // search functionality

    const searchPokemon = pokemons.filter((currCard)=>currCard.name.toLowerCase().includes(search.toLocaleLowerCase()))
  return (
    <>
        <section>
            <header>
                <h1>lets get Pokemon</h1>
            </header>
            <div>
                <input type="text" placeholder='search pokemon' value={search} onChange={(e)=>setSearch(e.target.value)}  />
            </div>
            <div>
                <ul>
                    {
                        searchPokemon.map((currPokemon)=>{
                           return  <PokemonCard key={currPokemon.id} pokemonData = {currPokemon} />
                            
                        })
                    }
                </ul>
            </div>
        </section>
    </>
  )
}

export default PokemonCartoon