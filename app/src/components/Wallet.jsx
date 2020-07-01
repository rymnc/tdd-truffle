import React from "react";
import { useWeb3React } from "@web3-react/core";
import injectedConnector from "../connector/connectors";
import useSWR from 'swr'

const fetcher = (library) => (...args) => {
  const [method, ...params] = args
  console.log('in fetcher',method, params)
  return library.eth[method](...params)
}

export const Balance = () => {
  const { account, library } = useWeb3React()
  const { data: balance } = useSWR(['getBalance', account, 'latest'], {
    fetcher: fetcher(library),
  })
  if(!balance) {
    return <div>...</div>
  }
  
  return <div>{library.utils.fromWei(balance)} Ether</div>
}


export const Wallet = () => {
  const { chainId, account, activate, active, library,deactivate,error } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);   
  };

  if(error){
    console.log(error.message)
  }

  return (
    <div className="container text-right">
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <>

        <Balance/>
            <button
          type="button"
          className="btn btn-outline-danger"
          onClick={()=>{deactivate(injectedConnector)}}
        >
          Disconnect
        </button>
            </>
          
          )
        
       : (
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
