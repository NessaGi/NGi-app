function PokemonCard() {
  const PokemonCard = ({ pokemon }) => {

  return (
    <figure>
    {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : 
    <p>???</p>}
    </figure>
    );
  }


}
export default PokemonCard;