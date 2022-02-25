const router = require('koa-router')()
const CompanyController = require('../controller/CompanyController')

router.prefix('/company')

router.get('/', CompanyController.list.bind(CompanyController))

module.exports = router
