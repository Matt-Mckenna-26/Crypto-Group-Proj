const ECurrencyController = require('../controllers/eCurrency.controller');


module.exports = (app) =>{
    
    app.get('/api/eCurrency', ECurrencyController.FindAllECurrencies);
    app.get('/api/eCurrency/:id', ECurrencyController.FindOneECurrency);
    app.post('/api/eCurrency', ECurrencyController.CreateNewECurrency);
    app.put('/api/eCurrency/:id', ECurrencyController.UpdateExistingECurrency);
    app.delete('/api/eCurrency/:id', ECurrencyController.DeleteExistingECurrency);
    
}