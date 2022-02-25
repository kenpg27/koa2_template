const router = require('koa-router')()
const UsersController = require('../controller/UsersController')
router.prefix('/users')

router.get('/', UsersController.list.bind(UsersController))

module.exports = router
