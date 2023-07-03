import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { register } from 'swiper/element/bundle';
register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
