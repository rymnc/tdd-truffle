import React from 'react'
import { useContext } from 'react'
import { Web3contextprovider, Web3context } from './context/web3-context'
import AccountGetter from './components/AccountGetter'
import "./bootstrap.min.css"
import AccountViewer from './components/AccountViewer'


const App = () => {

    
    return (
        <Web3contextprovider>
        <div>
                <AccountGetter/>
                <AccountViewer/>
        </div>
        </Web3contextprovider>
    )
}

export default App
