import SavedPokemons from "./screen/SavedPokemons";
import RenderPokemons from './screen/RenderPokemons';
import { useState } from "react";

function App() {
  const [showSaved, setShowSaved] = useState(true);

  const toggleView = () => {
    setShowSaved(!showSaved);
  };
  return (
    <div className="p-4">
      <div className="w-full flex justify-end">
        <button
          className={` pr-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out ${showSaved ? 'opacity-100 transform translate-x-0' : 'opacity-100 transform -translate-x-2'
            }`}
          onClick={toggleView}
        >
          {showSaved ? 'All Pokémons' : 'Saved Pokémons '}
        </button>
      </div>

      <div className="mt-4">
        {showSaved ? <RenderPokemons /> : <SavedPokemons />}
      </div>
    </div>
  );
}

export default App;
