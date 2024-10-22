const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];


function PokemonCard() {
        const pokemon = pokemonList[0]
    return (
        <figure>
            {
                pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>
            }
            <p>{pokemon.name}</p>
        </figure>);
          
  }

  export default PokemonCard;