import React from 'react'

const PokemonCard = ({pokemonData}) => {
  return (
    <>
        <div>
        <li>
            <figure>
                <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
            </figure>
            <h4>{pokemonData.name}</h4>
            
            
            </li>
        </div>
    </>
  )
}

export default PokemonCard