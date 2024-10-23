import "./App.css";

import PokemonCard from "./components/PokemonCard";

import { useState } from "react";





function App() {
  const  [pokemonIndex, setCount] = useState(0);
  const handleClickMore = () => {setCount(pokemonIndex + 1)};
  const handleClickLess = () => {setCount(pokemonIndex - 1)};
  const pokemonList = [
    {

      name: "bulbasaur",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  
    },
  
    {
  
      name: "charmander",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  
    },
  
    {
  
      name: "squirtle",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  
    },
  
    {
  
      name: "pikachu",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  
    },
    {
      name: "mew",
      imgSrc: ""
    }
];
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button type= "button" onClick={handleClickLess}>Precedent</button><button type= "button" onClick={handleClickMore}>Suivant</button>
    </div>
  );
}

export default App;
