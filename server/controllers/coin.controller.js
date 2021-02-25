const axios = require('axios').default;
require('dotenv').config();


module.exports.FindACoin = (req, res) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${req.params.coinName}`)
    .then(axResp => {
        res.send(axResp.data)
    })
    .catch(err => {
        res.status(400).send({err})
    })
}



const updateCoinBalance = (userCoinPortfolio) => {
    let userCoinBalance = 0 ;
    userCoinPortfolio.map((coin, idx) => {
        let thisCoinBal = 0
        axios.get(`http://localhost:8000/api/coin/${coin.name}`)
            .then(res => {
                let currentPrice = res.data.marketData.currentPrice.usd
                thisCoinBal = currentPrice * coin.numOfCoins
                userCoinBalance += thisCoinBal 
            })
            .catch(err => console.log('error fetching current price data'))
    })
}