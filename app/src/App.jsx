import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

import "./bootstrap.min.css";
import Wallet from "./components/Wallet";

function getLibrary(provider) {
  const library = new Web3(provider);
  const web3 = new Web3(provider);
  library.pollingInterval = 12000;
  console.log(web3);
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
