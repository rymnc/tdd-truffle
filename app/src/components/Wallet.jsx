import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import injectedConnector from "../connector/connectors";

export const Wallet = () => {
  const { chainId, account, activate, active, library,deactivate,error } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);   
  };

  if(error){
    console.log(error.message)
  }

  const [balance, setBalance] = useState("");

  if (library) {
    library.eth
      .getBalance(account)
      .then(function (res) {
        setBalance(library.utils.fromWei(res, "ether"));
      });
  }

  const handleClick = async () =>{
    setBalance( library.utils.fromWei(await library.eth.getBalance(account)))
  }

  return (
    <div className="container text-right">
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <>
          {balance !== "" ? (
            
            <p>{balance !== "" ? `Balance : ${balance} ether ` : ""}

        <button
          type="button"
          className="btn btn-outline-success mx-2"
          onClick={handleClick}
        >
          Refresh Balance
          </button>


            <button
          type="button"
          className="btn btn-outline-danger"
          onClick={()=>{deactivate(injectedConnector)}}
        >
          Disconnect
        </button>
            </p>
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
