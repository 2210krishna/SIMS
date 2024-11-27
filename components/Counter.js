import { useDispatch, useSelector } from "react-redux";
import { INCREMENT,DECREMENT } from "./Redux.js"; 


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const increaseCount = () => {
        dispatch({ type: INCREMENT }); 
    };
    const decreaseCount = () => {
        dispatch({ type: DECREMENT }); 
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>INCREASE</button>         
            <button onClick={decreaseCount}>DECREASE</button>

        </div>
    );
};

export default Counter;
