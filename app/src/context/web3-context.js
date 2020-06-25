import React, { createContext, useState, useEffect } from 'react';


export const Web3context = createContext();

export const Web3contextprovider = (props) =>{

    const [data,setData] = useState({
        address:''
    })



  //  const [web3Loaded,SetWeb3Loaded] = useState(false);

  


    return(
        <Web3context.Provider value={{data,setData}}>
            {props.children}
        </Web3context.Provider>
    )
}