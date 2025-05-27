import { Button } from 'antd'
import { useDispatch } from 'react-redux';
import { toggleShowFavorites } from '../../slices/uiSlice';
import './ShowFavoritesButton.css';

const ShowFavoritesButton = ({ showFavorites }) => {
    const dispatch = useDispatch();

    const handleShowFavorites = () => {
        dispatch(toggleShowFavorites());
    }

    return (
        <Button
            type="primary"
            onClick={handleShowFavorites}
            className={`favorites-button ${showFavorites ? 'hide-favorites' : 'show-favorites'}`}
        >
            {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
        </Button>
    );
};

export default ShowFavoritesButton;
