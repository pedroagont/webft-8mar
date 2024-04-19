function Counter(props) {
  const { counter, handleClickDecrement, handleClickIncrement } = props;

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClickDecrement}>Decrement (-)</button>
      <button onClick={handleClickIncrement}>Increment (+)</button>
    </div>
  );
}

export default Counter;
