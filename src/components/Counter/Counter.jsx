import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../../store/reducers/counterReducer";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.count);
  const onIncrement = () => {
    dispatch(increment())
  };

  const onDicrement = () => {
    dispatch(decrement())
  };
  return (
    <>
      <h1 data-testid="title">value = {value}</h1>
        <button onClick={() => onIncrement()} data-testid="increment">Increment</button>
        <button onClick={() => onDicrement()} data-testid="decrement">Dicrement</button>
    </>
  );
};
