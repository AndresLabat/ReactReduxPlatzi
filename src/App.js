import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from './components/Searcher/Searcher.jsx';
import TypeSelection from './components/TypeSelection/TypeSelection.jsx';
import PokemonList from './components/PokemonList/PokemonList.jsx';
import ShowFavoritesButton from './components/ShowFavoritesButton/ShowFavoritesButton.jsx';
import { getPokemon, getPokemonDetails } from './api';
import { setLoading } from './slices/uiSlice.js';
import { setPokemons } from './slices/dataSlice';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.data.pokemons);
  const loading = useSelector(state => state.ui.loading)
  const searchTerm = useSelector(state => state.ui.searchTerm);
  const typeSelected = useSelector(state => state.ui.typeSelected);
  const showFavorites = useSelector(state => state.ui.showFavorites);

  const allTypes = Array.from(
    new Set(
      pokemons.flatMap(pokemon => pokemon.types.map(t => t.type.name))
    )
  );

  const pokemonTypes = [
    { value: '', label: 'All types' },
    ...allTypes.map(type => ({
      value: type,
      label: type.charAt(0).toUpperCase() + type.slice(1)
    }))
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon =>
        getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed))
      dispatch(setLoading(false))
    };


    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons
  .filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter(pokemon =>
    !typeSelected || pokemon.types.some(t => t.type.name === typeSelected)
  );
  
  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <div className='searcher-container'>
          <Searcher />
          <TypeSelection options={pokemonTypes} selectedOption={typeSelected} />
        </div>
      </Col>
      <div className='favorite-button-container'>
        <ShowFavoritesButton showFavorites={showFavorites} />
      </div>
      {loading
        ? (
          <div className='spinner-container'>
            <Spin spinning size='large' />
          </div>
        )
        : (
          showFavorites
            ? (
                filteredPokemons.filter(pokemon => pokemon.favorite).length > 0
                  ? <PokemonList pokemons={filteredPokemons.filter(pokemon => pokemon.favorite)} />
                  : <div className='no-favorites'>No favorites found</div>
              )
            : <PokemonList pokemons={filteredPokemons} />
        )
      }
    </div>
  );
}

export default App;