import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "./bootstrap.min.css";
import Wallet from "./components/Wallet";
import EventCatcher from "./components/EventCatcher";

function getLibrary(provider) {
  const library = new Web3(provider);
  library.pollingInterval = 12000;
  console.log(library.givenProvider);
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
