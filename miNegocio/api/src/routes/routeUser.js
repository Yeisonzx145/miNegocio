const {Router} = require('express')
const userPostHandler = require('../handlers/user/userPostHandler')

const routeUser = Router()

routeUser.post('/created',userPostHandler)

module.exports = routeUser;