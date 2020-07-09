![Node.js CI](https://github.com/aaryamannchallani/tdd-truffle/workflows/Node.js%20CI/badge.svg?branch=master)
![License](https://img.shields.io/github/license/aaryamannchallani/tdd-truffle)

# tdd-truffle
### This Boilerplate code that I have made can be used by anyone looking to make quick dev iterations with frontend and backend(using Ethereum)
## Requirements:
<ul>
  <li>node.js (10+)</li>
  <li>truffle</li>
  <li>yarn</li>
  </ul>

## First install the dependencies by
`yarn get-dep`, then proceed as needed

## Total Setup:
1. `yarn total-setup` (Spins up the ganache instance, as well as serves the react-app on localhost:3000)


## Backend Setup:
1. `yarn setup` (Spins up the local ganache instance, port:9545, chainId:1337)
2. `yarn test-all` (runs all tests, run in different terminal)
3. `yarn test-deploy` (checks if contract can be deployed, run in different terminal)
4. `yarn test-cov` (Runs Coverage tests)

<i> Note that the contract name is newcon, and if additional contracts are to be deployed, include it in the 2_deploy_contracts.js file </i>

## Frontend Setup:
1. `cd app/`
2. `yarn start`

