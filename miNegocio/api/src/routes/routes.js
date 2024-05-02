const {Router} = require('express');

const routeBase = require('./routeBase')
const routeProduct = require('./routeProduct');
const routeUser = require('./routeUser');
const routes = Router();

routes.use('/',routeBase)
routes.use('/product',routeProduct)
routes.use('/user',routeUser)

module.exports = routes;