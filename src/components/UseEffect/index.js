import React, { useEffect, useState } from 'react';
import Produto from './Product';

export default function UseEffect() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const localProduct = window.localStorage.getItem('product');
    if (localProduct) {
      setProduct(localProduct);
    }
  }, []);

  useEffect(() => {
    if (product) {
      window.localStorage.setItem('product', product);
    }
  }, [product]);

  function handleClick(text) {
    setProduct(text);
  }

  return (
    <div>
      <p>Preferência: {product}</p>
      <button
        onClick={({ target }) => handleClick(target.innerText)}
        style={{ marginRight: '1rem' }}
      >
        notebook
      </button>
      <button
        onClick={({ target }) => handleClick(target.innerText)}
        style={{ marginRight: '1rem' }}
      >
        smartphone
      </button>
      <Produto product={product} />
    </div>
  );
}
