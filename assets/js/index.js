import { ethers } from './ethers-5.6.esm.min.js'
import { abi, contractAddress } from './constants.js'

const connectButton = document.getElementById('connectButton')
const stakeButton = document.getElementById('stake')
const unstakeButton = document.getElementById('unstake')
const showAccount = document.getElementById('showAccount')
const stakedisable = document.getElementById('stakeButton')
const dappStatus = document.getElementById('dappStatus')
const showBalance = document.getElementById('showBalance')

connectButton.onclick = connect
stakeButton.onclick = stake
unstakeButton.onclick = unstake

const tokenContract = '0x80d24658f30D59070a3B11724c70C47970a5F610'

console.log(ethers)

let preLoader = document.getElementById('preloader')
let notifyMM = document.getElementById('notifyMM')

window.onload = function () {
  document.body.style.overflow = 'hidden'
  setTimeout(function () {
    preLoader.style.display = 'none'
    document.body.style.overflow = 'auto'
  }, 1500)
}

async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    let provider = window.ethereum
    const chainid = await provider.request({
      method: 'eth_chainId',
    })

    console.log('This is Chain ID: ', chainid)
    if ((chainid === '0x61', (typeof window, ethereum !== 'undefined'))) {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' })
      } catch (error) {
        console.log(error)
      }
      connectButton.innerHTML = 'Connected'
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      showAccount.innerHTML = accounts
      stakedisable.style.display = 'flex'
      stakedisable.style.opacity = '1'
      dappStatus.innerHTML = 'Live!'
      dappStatus.style.backgroundColor = '#fee440'
      console.log(accounts)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(tokenContract, testAbi, signer)
      try {
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        const balance = await contract.balanceOf(accounts.toString())
        showBalance.innerHTML = `${ethers.utils.formatUnits(balance)} LX tokens`
        console.log('Done!')
      } catch (error) {
        console.log(error)
      }
    } else {
      connectButton.innerHTML = 'Please switch to Binance test net'
    }
  } else {
    connectButton.innerHTML = 'Please install MetaMask'
  }
}

function listenForTransactionMine(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash}...`)
  //listen for transaction to finish
  //Promise tells only finish this function once resolved
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReciept) => {
      console.log(
        `Completed with ${transactionReciept.confirmations} confirmations`,
      )
      resolve()
    })
  })
}


async function stake() {
  const amount = document.getElementById('standard').value
  const new_amount = ethers.utils.parseUnits(amount.toString(), 18)
  const stakeDays = document.getElementById('stakeDays')
  const days = stakeDays.options[stakeDays.selectedIndex].value
  if (amount == 0) {
    alert('Please input amount first')
  }
  console.log(`Funding with ${amount}...`)
  if ((typeof window, ethereum !== 'undefined')) {
    console.log('staking...')
    preLoader.style.display = 'block'
    notifyMM.style.display = 'block'
    notifyMM.innerHTML = 'Please wait a few seconds to stake tokens'
    document.body.style.overflow = 'hidden'
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer)
    const testTokenContract = new ethers.Contract(
      tokenContract,
      testAbi,
      signer,
    )
    try {
      const tokenContract = testTokenContract.connect(signer)
      const approve = await tokenContract.approve(
        '0x6822608F9ef82aa39852E98d42359c298854a78d',
        new_amount,
      )
      await approve.wait()

      const transactionResponse = await contract.Staking(amount, days)
      await listenForTransactionMine(transactionResponse, provider)
      console.log('Done!')
    } catch (error) {
      preLoader.style.display = 'none'
      notifyMM.style.display = 'none'
      document.body.style.overflow = 'auto'
      console.log(error)
    }
  }
}

async function unstake() {
  if ((typeof window, ethereum !== 'undefined')) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer)
    preLoader.style.display = 'block'
    notifyMM.style.display = 'block'
    document.body.style.overflow = 'hidden'
    notifyMM.innerHTML = 'Please wait a few seconds to unstake tokens'
    try {
      const transactionResponse = await contract.UnStaking({})
      await listenForTransactionMine(transactionResponse, provider)
      console.log('Done!')
    } catch (error) {
      preLoader.style.display = 'none'
      notifyMM.style.display = 'none'
      document.body.style.overflow = 'auto'
      console.log(error)
      alert('Please first stake Tokens to unstake')
    }
  }
}

// Disable Developer Tools
document.addEventListener('keydown', function () {
  if (event.keyCode == 123) {
    alert("This function has been disabled to view the code!");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert("This function has been disabled to view the code!");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    alert("This function has been disabled to view the code!");
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function (e) {
    alert("This function has been disabled to view the code!");
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function () {
    alert("This function has been disabled to view the code!");
    window.event.returnValue = false;
  });
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}

$(document).ready(function () {
  /*	Disables mobile keyboard from displaying when clicking +/- inputs */

  $('.input-number-decrement').attr('readonly', 'readonly')
  $('.input-number-increment').attr('readonly', 'readonly')

  /*Attributes variables with min and max values for counter*/

  var min = $('.input-number-decrement').data('min')
  var max = $('.input-number-increment').data('max')

  /*Incrementally increases the value of the counter up to max value, and ensures +/- input works when input has no value (i.e. when the input-number field has been cleared) */

  $('.input-number-increment').on('click', function () {
    var $incdec = $(this).prev()

    if ($incdec.val() == '') {
      $incdec.val(1)
    } else if ($incdec.val() < max) {
      $incdec.val(parseInt($incdec.val()) + 1)
    }
  })

  /*Incrementally decreases the value of the counter down to min value, and ensures +/- input works when input has no value (i.e. when the input-number field has been cleared) */

  $('.input-number-decrement').on('click', function () {
    var $incdec = $(this).next()

    if ($incdec.val() == '') {
      $incdec.val(0)
    } else if ($incdec.val() > min) {
      $incdec.val(parseInt($incdec.val()) - 1)
    }
  })

  /* Removes any character other than a number that is entered in number input */

  var input = document.getElementsByClassName('input-number')
  $(input).on('keyup input', function () {
    this.value = this.value.replace(/[^0-9]/g, '')
  })
})

const testAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
]
