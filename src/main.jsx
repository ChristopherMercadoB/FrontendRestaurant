import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RestaurantApp from './RestaurantApp'
import Login from './helpers/Login/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RestaurantApp/>
  </React.StrictMode>,
)
