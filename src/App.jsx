import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
const App = () => {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew", imgSrc: undefined
    },
  ];

  return (
    <div>
      <h1>Pokémon Cards</h1>
      <PokemonCard pokemon={pokemonList[0]}/>
    </div>
  )
}
export default App;

