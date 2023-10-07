import React from 'react';
import { savedPokemonList } from '../store/savedPokemonData';

const SavedPokemons = () => {
  const pokemons = Array.from(savedPokemonList.savedPokemon.values());
  return (
    <div className='flex flex-col items-center justify-center'>
      {pokemons.map(obj => (
        <div key={obj.id} className='w-11/12 md:w-3/4 lg:w-2/4 xl:w-1/3 my-4 p-6 bg-gray-50 shadow-lg rounded-lg flex items-center space-x-4 transition duration-300 ease-in-out transform hover:scale-105'>
        <img src={obj.pok_url} alt={obj.pok_name} className='w-1/6 h-auto rounded-full shadow-md' />
        <div className='flex flex-col'>
          <p className='text-lg font-semibold'>{obj.pok_name.charAt(0).toUpperCase() + obj.pok_name.slice(1)}</p>
          <button className='bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-2 transition duration-300 ease-in-out transform hover:scale-105'>
            Save Pokémon
          </button>
        </div>
      </div>
      ))}
    </div>
  );
};

export default SavedPokemons;
