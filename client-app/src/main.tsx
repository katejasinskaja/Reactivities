import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-calendar/dist/Calendar.css'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import { StoreContext, store } from './app/stores/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreContext.Provider value={store}>
            <RouterProvider router={router }/>
        </StoreContext.Provider>
  </StrictMode>,
)
