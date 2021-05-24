require("dotenv").config();
const rp = require("request-promise");
const requestOptions = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
  qs: {
    symbol: process.env.SYMBOLS,
    convert: "USD",
  },
  headers: {
    "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
  },
  json: true,
  gzip: true,
};

rp(requestOptions)
  .then((response) => {
    for (i = 0; i < Object.keys(response.data).length; i++) {
      let symbol = Object.keys(response.data)[i];
      let price = response.data[symbol].quote["USD"].price;
      console.log(`${symbol}: $${price}`);
    }
  })
  .catch((err) => {
    console.log("API call error:", err.message);
  });
