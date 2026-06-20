# LX-DApp

A lightweight Web3 token-staking dApp for the **LX** token on **Binance Smart Chain (BSC Mainnet)**. Connect a wallet, stake LX tokens for a fixed term, earn tiered APR, and unstake when the lock period ends.

> Live demo: https://dapp-jet-two.vercel.app

![Screenshot of the LX-DApp staking interface](./assets/images/screenshot-placeholder.png)
<!-- Replace the line above with a real screenshot of the dApp. -->

## Features

- Connect an injected wallet (MetaMask) and verify the user is on BSC Mainnet (chain ID `0x38`)
- Display the connected account and its LX token balance
- Stake LX tokens with a selectable lock duration and tiered APR:
  - up to 30 days &rarr; 8%
  - up to 90 days &rarr; 10%
  - up to 180 days &rarr; 13%
  - up to 365 days &rarr; 18%
- Unstake once the lock period has elapsed
- Shows the unlock timestamp for the active stake

## Tech stack

- Plain HTML, CSS, and vanilla JavaScript (ES modules) — no build step
- [ethers.js v5.6](https://docs.ethers.org/v5/) (bundled as `assets/js/ethers-5.6.esm.min.js`) for on-chain calls
- jQuery (CDN) for small UI helpers
- Two on-chain contracts on BSC Mainnet:
  - Staking contract: `0xb6d49F629eE46E733C4Bc3d0a9c376c9fBE0D0F0`
  - LX token (ERC-20): `0xf6F5d8881689c75e6Ea9Ee96DEC5272B7451c3fe`

> All addresses above are public on-chain identifiers — there are no private keys or secrets in this repository, and none are required to run the front end.

## Running locally

This is a static front end. Because it uses ES modules, serve it over HTTP rather than opening `index.html` directly from disk.

```bash
# install the dev server (http-server)
yarn install

# serve the current directory
npx http-server . -p 8080
```

Then open http://localhost:8080 in a browser with MetaMask installed and switched to **BSC Mainnet**.

## Project structure

```
.
├── index.html
├── assets
│   ├── css/style.css
│   ├── js/constants.js   # contract address + staking ABI
│   ├── js/index.js        # wallet connect, stake/unstake logic
│   └── js/ethers-5.6.esm.min.js
├── package.json
└── README.md
```

## Notes

- The app targets BSC Mainnet only; it will prompt you to switch networks otherwise.
- Staking involves an ERC-20 `approve` followed by the `Staking` call, so expect two wallet confirmations when staking.

## License

Released under the [MIT License](./LICENSE).