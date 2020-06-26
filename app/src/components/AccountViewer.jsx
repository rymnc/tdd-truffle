import React from "react";
import { useContext } from "react";
import { Web3context } from "../context/web3-context";

const AccountViewer = () => {
  const { data } = useContext(Web3context);
  return (
    <div className="container text-right">
      <h3 className="display-6">Address:{data.address}</h3>
    </div>
  );
};

export default AccountViewer;
