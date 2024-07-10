import React from 'react'
import ReactDOM from 'react-dom/client'
import { Client, cacheExchange, fetchExchange, Provider } from 'urql'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PersonPage from './people/pages/PersonPage'
import HomePage from './people/pages/HomePage'
import NotFoundPage from './people/pages/NotFoundPage'
import './styles.css'

const client = new Client({
  url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  // TODO:  What are cacheExchange and fetchExchange for?
  exchanges: [cacheExchange, fetchExchange]
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
