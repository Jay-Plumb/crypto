### Summary

It's quite painful to view all the different prices when viewing multiple altcoins so a basic app was built to simply list out the current price for each
altcoin (symbol). The app uses the CoinMarketCap [API](https://coinmarketcap.com/api/) so if a coin is not listed on the site then you will not see a price within the terminal.

### Prerequisites

- Install [NodeJS](https://nodejs.org/en/)

### Setup Instructions

- Clone the project `git clone`
- Within the root directory run (within terminal) `npm i`
- Create a private API key by [signing up](https://pro.coinmarketcap.com/signup/)
- Within the root directory run the following command (within terminal):
  `cp .env_template .env`
- Within `.env` set `COIN_MARKET_CAP_API_KEY` equal to the private key in step 2 above
- Within `.env` set `SYMBOLS` equal to the coin symbols e.g. `BTC,ETH,HAPPY` (comma separated with no space)

### Contribution

This project is open source so simply create a PR if you wish to contribute to the codebase