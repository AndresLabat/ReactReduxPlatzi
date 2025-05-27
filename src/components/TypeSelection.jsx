import { Select } from "antd"
import { useDispatch } from "react-redux";
import { setTypeSelected } from "../slices/uiSlice";
import './TypeSelection.css';


const TypeSelection = ({ options, selectedOption }) => {
    const dispatch = useDispatch();

    const OnSelect = (value) => {
        dispatch(setTypeSelected(value));
    };

    return (
        <Select options={options} value={selectedOption} onSelect={OnSelect} className="type-selection" />
    )

}

export default TypeSelection;