import { Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

const HeartButton = ({ isFavorite, onClick }) => {
    const Icon = isFavorite
        ? <HeartFilled style={{ color: 'red', fontSize: '20px' }} />
        : <HeartOutlined style={{ fontSize: '20px' }} />;

    return (
        <Button
            icon={Icon}
            onClick={onClick}
            type="text" // <--- Sin fondo ni borde
        />
    );
};

export default HeartButton;
