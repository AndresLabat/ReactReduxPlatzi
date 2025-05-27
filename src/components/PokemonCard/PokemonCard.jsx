import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/es/card/Meta';
import HeartButton from '../HeartButton/HeartButton';
import { setFavorite } from '../../slices/dataSlice';
import './PokemonCard.css';


const PokemonCard = ({name, image, types, id, favorite}) => {
    const dispatch = useDispatch();
    const typeString = types.map(elem => elem.type.name).join(', ');
    const firstType = types[0] ? types[0].type.name : '';
    const secondType = types[1] ? types[1].type.name : 'one-type';

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}))
    }

    return <Card
        title={name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Unknown'}
        cover={<img 
            src={image ? image : 'https://blog.frikibunker.es/wp-content/uploads/2025/01/c996a7ad-30d1-4194-a3f9-2a4fb99ca916-1.jpg'} 
            alt={name ? name  : 'Unknown'} />}
        extra={<HeartButton isFavorite = {favorite}  onClick={handleOnFavorite}/>}
        className={`PokemonCard second-${secondType} ${firstType}`}>
        <Meta description={types ? typeString : "Unknown types"} />
    </Card>
}

export default PokemonCard;