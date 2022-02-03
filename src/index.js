import React from 'react';
import { ReactDOM, render } from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: "https://mern-heroku-00.herokuapp.com/",
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
