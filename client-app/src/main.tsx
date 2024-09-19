import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/layout/App.tsx'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import { StoreContext, store } from './app/stores/store.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>
  </StrictMode>,
)
