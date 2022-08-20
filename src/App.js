import { useSelector, useDispatch } from 'react-redux';
import { counterAction, decrement } from './store/action/counterAction'


function App() {
  const dispatch = useDispatch()

  const state = useSelector((state) => state.counterReducer);

  const incre = () => {
    dispatch(counterAction(10))
  }

  const decr = () => {
    dispatch(decrement(5))
  }

  return (
    <>
      <h1>Hello</h1>
      <h1>{state}</h1>
      <button onClick={incre}>incre</button>
      <button onClick={decr}>defdef</button>
    </>
  );
}

export default App;
