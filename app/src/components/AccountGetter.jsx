import React from "react";
import { useContext, useEffect } from "react";
import { Web3context } from "../context/web3-context";
import Web3 from "web3";

const TestComp = () => {
  const { data, setData, w3, setW3, isConnected, setIsConnected } = useContext(
    Web3context
  );
  //  console.log(data)

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function (accounts) {
      // Time to reload your interface with accounts[0]!

      setData({ address: accounts[0] });
      try {
        const web3_temp = new Web3(window.web3.currentProvider);
        setW3(web3_temp);
        //    console.log(w3);
        setIsConnected(true);
      } catch (error) {
        console.log(error);
        setIsConnected(false);
      }
    });
  }

  const handleClick = async () => {
    if (isConnected) {
      setW3(null);
      setIsConnected(false);
      const refresh = {
        address: "",
      };
      setData(refresh);
    } else {
      const accounts = await window.ethereum.enable();

      const details = {
        address: window.ethereum.selectedAddress,
      };
      setData(details);

      try {
        const web3_temp = new Web3(window.web3.currentProvider);
        setW3(web3_temp);
        console.log(w3);
        setIsConnected(true);
      } catch (error) {
        setIsConnected(false);

        console.log(error);
      }
    }
  };

  const buttonData = () => {
    if (isConnected) {
      return "Disconnect Wallet";
    } else {
      return "Connect Wallet";
    }
  };
  return (
    <div className="container text-right mt-2 ">
      <button className="btn btn-primary" onClick={handleClick}>
        {buttonData()}
      </button>
    </div>
  );
};

export default TestComp;
