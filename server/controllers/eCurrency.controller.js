const {Mongoose} = require ('mongoose');
const eCurrency = require('../models/eCurrency.model');


module.exports = {
    FindAllECurrencies: (req,res) => {
        eCurrency.find()
            .sort({title:"ascending"})
            .then((foundECurrencies) => res.json(foundECurrencies))
            .catch((err) => {
                console.log("Error finding All Currencies: " + err);
                res.json(err)
            });
    },

    FindOneECurrency: (req,res)=> {
        eCurrency.findById(req.params.id)
            .then((foundOneEcurrency) => res.json(foundOneEcurrency))
            .catch((err) => {
                console.log("Error finding Specific Currency: " + err);
                res.json(err)
            });
    },
    CreateNewECurrency: (req,res) => {
        eCurrency.findOne({
            title:req.body.title
        })
            .then((existingECurrency) => {
                if (existingECurrency) {
                    console.log("ECurrency already exists")
                    res.json({message: "ECurrency already exists"});
                }
                else {
                    eCurrency.create(req.body)
                        .then((newlyCreatedECurrency) => res.json(newlyCreatedECurrency))
                        .catch((err) => {
                            console.log("Error creating New ECurrency: " + err);
                            res.json(err)
                        });
                }
            })
            .catch((err) => {
                console.log("Error developing ECurrency: " + err);
                res.json(err)
            });

    },
    UpdateExistingECurrency: (req,res) => {
        eCurrency.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then((updatedECurrency) => res.json(updatedECurrency))
            .catch((err) => {
                console.log("Error finding ECurrency to Update: " + err);
                res.json(err)
            });
    },
    DeleteExistingECurrency: (req,res) => {
        eCurrency.findByIdAndDelete (req.params.id)
            .then((deletedECurrency) => res.json (deletedECurrency))
            .catch((err) => {
                console.log("Error Deleting ECurrency: " + err);
                res.json(err)
            });
    },
}