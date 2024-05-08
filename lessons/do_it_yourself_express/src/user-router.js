const Router = require("../framework/router")
const  controllers = require('./user-controller')

const router = new Router()


router.get('/users', controllers.getUsers )


router.post('/users', controllers.createUser )


module.exports = router