const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/CrytoGroupLocal", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the local DB for Group Crypto Proj"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));