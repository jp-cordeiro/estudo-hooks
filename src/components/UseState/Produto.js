import React from 'react';

export default function Produto({ dados }) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <h1>{dados.preco}</h1>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
}
