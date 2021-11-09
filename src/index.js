import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  gql,
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context'
import { cache } from './cache'
const httpLink = createHttpLink({
  uri: 'https://enigmatic-chamber-69253.herokuapp.com/',
})

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('user-token')

  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
  typeDefs,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
