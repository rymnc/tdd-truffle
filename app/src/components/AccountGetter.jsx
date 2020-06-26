import React from 'react'
import { useContext,useEffect } from 'react'
import { Web3context } from '../context/web3-context'
import Web3 from 'web3';

const TestComp = () => {
    const {data,setData,w3,setW3} = useContext(Web3context);
  //  console.log(data)

    window.ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        const details = {
            address:accounts[0],
          
        }
        setData(details)
        const web3_temp = new Web3(window.web3.currentProvider)
        setW3(web3_temp)
        console.log(w3)
      })


    const handleClick = async () =>{
        const accounts = await window.ethereum.enable();
    
        const details = {
            address:window.ethereum.selectedAddress,
          
        }
        setData(details)
        const web3_temp = new Web3(window.web3.currentProvider)
        setW3(web3_temp)
        console.log(w3)
    }
    return (
        <div className="container text-right mt-2 ">
      
            <button className="btn btn-primary" onClick={handleClick}>Login with Metamask</button>
        </div>
    )
}

export default TestComp
