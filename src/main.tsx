import './assets/styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './main/App.tsx'
import Provider from './main/ApolloProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
