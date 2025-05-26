import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { pokemonsReducer } from './pokemons';

const rootReducers = combineReducers({
    data: pokemonsReducer,
    ui: uiReducer,
});

export default rootReducers;
