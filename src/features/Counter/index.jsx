import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const handleIncreaseClick = () => {
        const action = increase(); // action creator
        dispatch(action);
    };

    const handleDecreaseClick = () => {
        const action = decrease(); // action creator
        dispatch(action);
    };
    return (
        <div>
            Counter: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
};

export default Counter;
