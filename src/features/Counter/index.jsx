import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css';

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
        <div className={styles.counter}>
            Counter: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
};

export default Counter;
