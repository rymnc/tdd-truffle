import React from 'react'
import { useContext,useEffect } from 'react'
import { Web3context } from '../context/web3-context'

const TestComp = () => {
    const {data,setData} = useContext(Web3context);
    console.log(data)

    window.ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        const details = {
            address:accounts[0],
          
        }
        setData(details)
      })


    const handleClick = async () =>{
        const accounts = await window.ethereum.enable();
    
        const details = {
            address:window.ethereum.selectedAddress,
          
        }
        setData(details)
    }
    return (
        <div className="container text-right mt-2 ">
      
            <button className="btn btn-primary" onClick={handleClick}>Login with Metamask</button>
        </div>
    )
}

export default TestComp
