interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

  function NavBar ({pokemonIndex,setPokemonIndex,pokemonList}:NavBarProps){
    const handleClick = (index) => {setPokemonIndex(index)}
    return (
        <>
          {pokemonList.map((Pokemon,index)=>(
            <button
            key={Pokemon.name}
            onClick={()=>handleClick(index)}
            >
              {Pokemon.name}
            </button>
          ))}

        </>
    )
  }

  export default NavBar