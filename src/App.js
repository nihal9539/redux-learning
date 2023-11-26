import { useSelector,useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(actions.increase())
   
  }
  const decrease = () => {
    dispatch(actions.decrease())
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
