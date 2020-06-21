const routes = require('express').Router();

const ProductsController = require('./controllers/ProductController');

routes.get('/products', ProductsController.index);
routes.post('/products', ProductsController.store);
routes.put('/products/:id', ProductsController.update);
routes.delete('/products/:id', ProductsController.destroy);

module.exports = routes;