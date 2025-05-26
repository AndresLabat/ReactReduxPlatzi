import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon, getPokemonDetails } from './api';
import { setLoading } from './slices/uiSlice.js';
import { setPokemons } from './slices/dataSlice';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.data.pokemons);
  const loading = useSelector(state => state.ui.loading)

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

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading
        ? (
          <Col span={12} offset={12}>
            <Spin spinning size='large' />
          </Col>
        )
        : (
          <PokemonList pokemons={pokemons} />
        )
      }
    </div>
  );
}

export default App;