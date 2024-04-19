import '../styles/App.css';
import Counter from './Counter';
import useCounter from '../hooks/useCounter';

function App() {
  const { counter, handleClickDecrement, handleClickIncrement } = useCounter();

  return (
    <Counter
      counter={counter}
      handleClickDecrement={handleClickDecrement}
      handleClickIncrement={handleClickIncrement}
    />
  );
}

export default App;
