import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="dev-pj08wp3g5yhini3d.uk.auth0.com"
    clientId="U1fJe9dew6dWgDpUT7vBbOw9Octtzcus"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  </Auth0Provider>,
)
