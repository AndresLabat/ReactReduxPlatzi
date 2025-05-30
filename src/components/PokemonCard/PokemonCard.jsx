import { Card, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/es/card/Meta';
import HeartButton from '../HeartButton/HeartButton';
import { setFavorite } from '../../slices/dataSlice';
import { useState } from 'react';
import './PokemonCard.css';

const PokemonCard = ({ name, image, types, id, favorite, stats, baseExperience }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const typeString = types.map(elem => elem.type.name).join(', ');
    const firstType = types[0] ? types[0].type.name : '';
    const secondType = types[1] ? types[1].type.name : 'one-type';

    const handleOnFavorite = (e) => {
        e.stopPropagation();
        dispatch(setFavorite({ pokemonId: id }))
    }

    const handleCardClick = () => {
        setOpen(true);
    }

    const handleModalClose = () => {
        setOpen(false);
    }

    console.log("stats", stats);

    return (
        <>

            <Card
                title={name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Unknown'}
                cover={<img
                    src={image ? image : 'https://blog.frikibunker.es/wp-content/uploads/2025/01/c996a7ad-30d1-4194-a3f9-2a4fb99ca916-1.jpg'}
                    alt={name ? name : 'Unknown'} />}
                extra={<HeartButton isFavorite={favorite} onClick={handleOnFavorite} />}
                className={`pokemon-card second-${secondType} ${firstType}`}
                onClick={handleCardClick}
                hoverable
            >

                <Meta description={types ? typeString : "Unknown types"} />
            </Card>
            <Modal
                className={`modal-pokemon second-${secondType} ${firstType} modal-card`}
                open={open}
                onCancel={handleModalClose}
                footer={null}
                title={name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Unknown'}
                centered
            >
                <div className={`pokemon-card second-${secondType} ${firstType} modal-card`}>
                    <img
                        src={image ? image : 'https://blog.frikibunker.es/wp-content/uploads/2025/01/c996a7ad-30d1-4194-a3f9-2a4fb99ca916-1.jpg'}
                        alt={name ? name : 'Unknown'}
                        style={{ width: '100%', marginBottom: '1rem' }}
                    />
                </div>
                <div><strong>Types:</strong> {typeString}</div>
                <div><strong>Base Experience:</strong> {baseExperience}</div>
                <div>
                    <strong>Stats:</strong>
                    <ul>
                        {Array.isArray(stats) && stats.length > 0
                            ? (
                                stats.map((stat, idx) => (
                                    <li key={stat.name ?? stat.stat?.name ?? idx}>
                                        {(stat.name ?? stat.stat?.name ?? 'Unknown')}: {(stat.value ?? stat.base_stat ?? 'N/A')}
                                    </li>
                                ))
                            ) : (
                                <li>No stats available</li>
                            )}
                    </ul>
                </div>
                <div className='hearth-right'>
                    <HeartButton isFavorite={favorite} onClick={handleOnFavorite} />
                </div>
            </Modal>
        </>
    );

}

export default PokemonCard;