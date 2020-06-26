import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';

export const Web3context = createContext();

export const Web3contextprovider = (props) =>{

    const [data,setData] = useState({
        address:''
    })

    const [w3,setW3] = useState({})



  //  const [web3Loaded,SetWeb3Loaded] = useState(false);

  


    return(
        <Web3context.Provider value={{data,setData,w3,setW3}}>
            {props.children}
        </Web3context.Provider>
    )
}