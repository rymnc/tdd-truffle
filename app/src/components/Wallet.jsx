import React, { useState } from "react";

import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

import injectedConnector from "../connector/connectors";
export const Wallet = () => {
  const { chainId, account, activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
    // handleBalance()
  };

  const [balance, setBalance] = useState("");

  const handleBalance = async () => {
    const web3 = new Web3(window.ethereum);
    const temp = web3.utils.fromWei(
      await web3.eth.getBalance(account),
      "ether"
    );
    setBalance(temp.slice(0, 6));
  };

  return (
    <div className="container text-right">
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <>
          {balance !== "" ? (
            <p>{balance !== "" ? `Balance : ${balance} ether` : ""}</p>
          ) : (
            <button className="btn-primary btn " onClick={handleBalance}>
              Get Balance
            </button>
          )}
        </>
      ) : (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onClick}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default Wallet;
