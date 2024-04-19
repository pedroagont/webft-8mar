import { useState, useEffect } from 'react';

function useAppData() {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => setAppData(data.results));
  }, []);

  return { appData };
}

export default useAppData;
