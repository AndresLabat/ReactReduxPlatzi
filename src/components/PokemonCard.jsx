import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/es/card/Meta';
import StarButton from './Starbutton';
import './PokemonCard.css';
import { setFavorite } from '../actions';

const PokemonCard = ({name, image, types, id, favorite}) => {
    const dispatch = useDispatch();
    const typeString = types.map(elem => elem.type.name).join(', ');

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}))
    }

    return <Card
        title={name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Unknown'}
        cover={<img 
            src={image ? image : 'https://blog.frikibunker.es/wp-content/uploads/2025/01/c996a7ad-30d1-4194-a3f9-2a4fb99ca916-1.jpg'} 
            alt={name ? name  : 'Unknown'} />}
        extra={<StarButton isFavorite = {favorite}  onClick={handleOnFavorite}/>}
        className='PokemonCard'
    >
        <Meta description={types ? typeString : "Unknown types"} />
    </Card>
}

export default PokemonCard;