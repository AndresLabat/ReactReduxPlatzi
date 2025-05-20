import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const PokemonCard = ({name, image, abilities}) => {
    return <Card
        title={name ? name : 'Unknown'}
        cover={<img 
            src={image ? image : 'https://blog.frikibunker.es/wp-content/uploads/2025/01/c996a7ad-30d1-4194-a3f9-2a4fb99ca916-1.jpg'} 
            alt={name ? name  : 'Unknown'} />}
        extra={<StarOutlined />}
    >
        <Meta description={abilities ? abilities.join(', ') : "Unknown skills"} />
    </Card>
}

export default PokemonCard;