export const contractAddress = "0xdb9FB447a2E0dd7C1B4e78dA38eA1A03D9E973b4"
export const abi =[
  {
     "inputs": [
        {
           "internalType": "address",
           "name": "_ER20CToken",
           "type": "address"
        }
     ],
     "stateMutability": "nonpayable",
     "type": "constructor"
  },
  {
     "anonymous": false,
     "inputs": [
        {
           "indexed": true,
           "internalType": "address",
           "name": "previousOwner",
           "type": "address"
        },
        {
           "indexed": true,
           "internalType": "address",
           "name": "newOwner",
           "type": "address"
        }
     ],
     "name": "OwnershipTransferred",
     "type": "event"
  },
  {
     "inputs": [],
     "name": "ERC20Token",
     "outputs": [
        {
           "internalType": "address",
           "name": "",
           "type": "address"
        }
     ],
     "stateMutability": "view",
     "type": "function"
  },
  {
     "inputs": [
        {
           "internalType": "uint256",
           "name": "stake_amount",
           "type": "uint256"
        },
        {
           "internalType": "uint256",
           "name": "_staking_days",
           "type": "uint256"
        }
     ],
     "name": "Staking",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
  },
  {
     "inputs": [],
     "name": "StakingToken",
     "outputs": [
        {
           "internalType": "address",
           "name": "",
           "type": "address"
        }
     ],
     "stateMutability": "view",
     "type": "function"
  },
  {
     "inputs": [],
     "name": "UnStaking",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
  },
  {
     "inputs": [
        {
           "internalType": "address",
           "name": "",
           "type": "address"
        }
     ],
     "name": "Users",
     "outputs": [
        {
           "internalType": "uint256",
           "name": "timestamp",
           "type": "uint256"
        },
        {
           "internalType": "uint256",
           "name": "stake_amount",
           "type": "uint256"
        },
        {
           "internalType": "uint256",
           "name": "staking_days",
           "type": "uint256"
        },
        {
           "internalType": "uint256",
           "name": "APR",
           "type": "uint256"
        }
     ],
     "stateMutability": "view",
     "type": "function"
  },
  {
     "inputs": [],
     "name": "balanceOf",
     "outputs": [
        {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
        }
     ],
     "stateMutability": "view",
     "type": "function"
  },
  {
     "inputs": [
        {
           "internalType": "address",
           "name": "stakingAddress",
           "type": "address"
        }
     ],
     "name": "changeStakingTokenAddress",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
  },
  {
     "inputs": [
        {
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
        }
     ],
     "name": "deposit",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
  },
  {
     "inputs": [],
     "name": "owner",
     "outputs": [
        {
           "internalType": "address",
           "name": "",
           "type": "address"
        }
     ],
     "stateMutability": "view",
     "type": "function"
  },
  {
     "inputs": [],
     "name": "renounceOwnership",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
  },
  {
     "inputs": [
        {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
        }
     ],
     "name": "stakingAcct",
     "outputs": [
        {
           "internalType": "address",
           "name": "",
           "type": "address"
        }
     ],
     "stateMutability": "view",
     "type": "function"
  },
  {
     "inputs": [
        {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
        }
     ],
     "name": "staking_time",
     "outputs": [
        {
           "internalType": "uint256",
           "name": "staking_days",
           "type": "uint256"
        },
        {
           "internalType": "uint256",
           "name": "APR",
           "type": "uint256"
        }
     ],
     "stateMutability": "view",
     "type": "function"
  },
  {
     "inputs": [
        {
           "internalType": "address",
           "name": "newOwner",
           "type": "address"
        }
     ],
     "name": "transferOwnership",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
  },
  {
     "inputs": [
        {
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
        }
     ],
     "name": "withdraw",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
  }
]
