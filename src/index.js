import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from "ethers";

import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

function getLibrary(provider) {
  // return new Web3Provider(provider);
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter >
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Web3ReactProvider>,
  document.getElementById('root')
);
