import React, { useEffect } from 'react'
import { Data } from "../store/pokemonData";

const RenderPokemons = () => {

  return (
    <div>
        {Data.objects.map(obj => (
            <div key={obj.id}>
                <p>Name: {obj.pok_name}</p>
                <p>URL: {obj.pok_url}</p>
            </div>
        ))}
    </div>
    
  )
}

export default RenderPokemons