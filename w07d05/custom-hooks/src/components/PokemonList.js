function PokemonList(props) {
  const { appData } = props;
  return (
    <ul>
      {appData.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
}

export default PokemonList;
