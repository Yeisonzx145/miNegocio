const {Router} = require('express')

const routeBase = Router();

routeBase.get('/',(req,res)=>{
    res.status(200).send('Ruta base')
})

module.exports = routeBase;