import React from 'react';

import './global.css';

import Routes from './routes';

// JSX (Javascript XML) HTML no JavaScript
function App() {
  // retorna um array
  // Array[valor, funcaoAtualizacao]
  return (
    <div>
      <Routes /> 
    </div>
  );
}

export default App;
