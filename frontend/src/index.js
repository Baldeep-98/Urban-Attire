import React from "react";
import ReactDOM from 'react-dom/client';
import'./index.css';
import App from "./App";
import{Provider} from 'react-redux';
import {storeInformation} from './storeInformation';
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storeInformation}>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Provider>
);