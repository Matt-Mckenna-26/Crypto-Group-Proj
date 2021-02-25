const CoinController = require("../controllers/coin.controller");


//routes to get raw data about a specific coin 
module.exports = app => {
    app.get("/api/coin/:coinName", CoinController.FindACoin);
};