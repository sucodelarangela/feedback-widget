import React from 'react'
import ReactDOM from 'react-dom/client' // integração do React com o DOM
import App from './App'

import './global.css' // no React, todas as importações são feitas no arquivo javascript, inclusive os stylesheets. O Vite vai lidar com esse carregamento.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/*
O ReactDOM.createRoot() é um método existente no 'react-dom/client' que seleciona qual elemento no HTML vai receber o conteúdo da aplicação React e, dentro desse elemento, ele executa o método 'render' que insere nossa aplicação.
*/