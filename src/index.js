import React from 'react';
import { ReactDOM, render } from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: "https://server-heroku-01.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
reportWebVitals();
