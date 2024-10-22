


function PokemonCard({pokemon}) {

    return (
        <figure>
            {
                pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>
            }
            <p>{pokemon.name}</p>
        </figure>);
          
  }

  export default PokemonCard;