import React, { useEffect, useState } from 'react';

export default function Produto({ product }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (product) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
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
  }, [product]);

  if (!data) return null;
  return (
    <div>
      {error && <p>Erro na requisição.</p>}
      {loading && <p>Carregando ...</p>}
      <h1>{data.nome}</h1>
      <p>{data.preco}</p>
    </div>
  );
}
