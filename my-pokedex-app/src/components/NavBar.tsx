interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

  function NavBar ({pokemonIndex,setPokemonIndex}:NavBarProps){
    const handleClickMore = () => {setPokemonIndex(pokemonIndex + 1)};
    const handleClickLess = () => {setPokemonIndex(pokemonIndex - 1)};
    return (
        <nav>
        <button type= "button" onClick={handleClickLess}>Precedent</button><button type= "button" onClick={handleClickMore}>Suivant</button>
        </nav>
    )
  }

  export default NavBar