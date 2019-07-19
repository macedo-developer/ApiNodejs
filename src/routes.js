const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

const UserController = require('./controllers/UserController');

// User
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/user', UserController.add);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

// Products
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);
routes.post('/product', ProductController.store);

module.exports = routes;

