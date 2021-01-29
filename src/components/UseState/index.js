import React, { useState } from 'react';
import Produto from './Product';

export default function UseState() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleClick(text) {
    setError(null);
    setLoading(true);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${text}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <button
        style={{ margin: '.5rem' }}
        onClick={({ target }) => handleClick(target.innerText)}
      >
        notebook
      </button>
      <button
        style={{ margin: '.5rem' }}
        onClick={({ target }) => handleClick(target.innerText)}
      >
        smartphone
      </button>
      <button
        style={{ margin: '.5rem' }}
        onClick={({ target }) => handleClick(target.innerText)}
      >
        tablet
      </button>
      {error && <p>Erro na requisição.</p>}
      {loading && <p>Carregando ...</p>}
      {data && <Produto data={data} />}
    </div>
  );
}
