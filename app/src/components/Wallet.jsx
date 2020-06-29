import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import injectedConnector from "../connector/connectors";

export const Wallet = () => {
  const { chainId, account, activate, active, library } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  const [balance, setBalance] = useState("");

  if (library) {
    library.eth
      .getBalance(window.ethereum.selectedAddress)
      .then(function (res) {
        setBalance(library.utils.fromWei(res, "ether"));
      });
  }

  return (
    <div className="container text-right">
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <>
          {balance !== "" ? (
            <p>{balance !== "" ? `Balance : ${balance} ether` : ""}</p>
          ) : (
            <p>Loading...</p>
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
