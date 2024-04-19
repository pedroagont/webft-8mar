import '../styles/App.css';
import Counter from './Counter';
import PokemonList from './PokemonList';
import useCounter from '../hooks/useCounter';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useAppData from '../hooks/useAppData';

function App() {
  const { counter, handleClickDecrement, handleClickIncrement } = useCounter();
  const { appData } = useAppData();

  useDocumentTitle(`Counter: ${counter}`);

  return (
    <div>
      <Counter
        counter={counter}
        handleClickDecrement={handleClickDecrement}
        handleClickIncrement={handleClickIncrement}
      />
      <PokemonList appData={appData} />
    </div>
  );
}

export default App;
