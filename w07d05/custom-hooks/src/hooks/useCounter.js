import { useState } from 'react';

function useCounter() {
  const [counter, setCounter] = useState(0);
  const handleClickDecrement = () => setCounter(counter - 1);
  const handleClickIncrement = () => setCounter(counter + 1);

  return { counter, handleClickDecrement, handleClickIncrement };
}

export default useCounter;
