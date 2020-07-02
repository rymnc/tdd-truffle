import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import {  Web3Provider } from "@ethersproject/providers";
import "./bootstrap.min.css";
import Wallet from "./components/Wallet";


function getLibrary(provider) {
  const library = new Web3Provider(provider, "any")
  library.pollingInterval = 12000;
  return library;
}

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Wallet />      
    </Web3ReactProvider>
  );
};

export default App;
