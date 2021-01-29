import React from 'react';

export default function Produto({ data }) {
  return (
    <div>
      <h1>{data.nome}</h1>
      <h1>{data.preco}</h1>
      <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
    </div>
  );
}
