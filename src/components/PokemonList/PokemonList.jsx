
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons = Array(10).fill({ name: '', image: '' }) }) => {
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return (
                    <PokemonCard
                        name={pokemon.name}
                        key={pokemon.name}
                        image={pokemon.sprites.front_default}
                        types={pokemon.types}
                        id={pokemon.id}
                        favorite={pokemon.favorite}
                        stats={pokemon.stats.map(stat => ({
                            name: stat.stat.name,
                            value: stat.base_stat
                        }))}
                        baseExperience={pokemon.base_experience}
                    />
                );
            })}
        </div>
    );
};

export default PokemonList
