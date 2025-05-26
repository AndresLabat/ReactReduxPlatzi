import {Input} from 'antd'
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../slices/uiSlice';
import './Searcher.css';

const Searcher = () => {
    const dispatch = useDispatch()

    const onChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return <Input.Search placeholder='Escribe el nombre del pokemon que deseas encontrar' className='searcher' onChange={onChange}/>
}

export default Searcher;