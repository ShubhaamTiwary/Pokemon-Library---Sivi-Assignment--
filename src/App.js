import SavedPokemons from "./screen/SavedPokemons";
import RenderPokemons from './screen/RenderPokemons';
import { useState } from "react";

function App() {
  const [showSaved, setShowSaved] = useState(false);

  const toggleView = () => {
    setShowSaved(!showSaved);
  };
  return (
    <div className="p-4">
      <RenderPokemons />
    </div >
  );
}

export default App;
