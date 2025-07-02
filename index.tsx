// Este archivo muestra una página simple y llama a la API para loguear IP

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api/log');
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡Hola!</h1>
      <p>Gracias por visitar :)</p>
    </div>
  );
}