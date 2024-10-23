interface PokemonCardProps{
    pokemon:{
        name: string,
        imgSrc: string,
    }
}


function PokemonCard({pokemon}: PokemonCardProps) {

    return (
        <figure>
            {
                pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>
            }
            <p>{pokemon.name}</p>
        </figure>);
          
  }

  export default PokemonCard;