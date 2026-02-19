import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PrimeReactProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrimeReactProvider>
)
