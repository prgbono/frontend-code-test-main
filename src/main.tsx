import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'urql'
import { createClient } from 'urql'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PersonPage from './people/pages/PersonPage'
import HomePage from './people/pages/HomePage'
import NotFoundPage from './people/pages/NotFoundPage'
import './styles.css'

const client = createClient({
  url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  exchanges: []
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/person/:personId',
    element: <PersonPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
