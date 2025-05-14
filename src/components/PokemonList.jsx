import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons = Array(10).fill({ name: '', image: '' }) }) => {
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name}/>;
            })}
        </div>
    );
};

export default PokemonList
