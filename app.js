const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const fs = require('fs')
const cors = require('koa2-cors');
const mongoConf = require('./config/mongo');
import corsConfigs from './config/cors'
const jsonResponse = require('./middleware/jsonResponse')
mongoConf.connect();
// error handler
onerror(app)
// middlewares

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(cors(corsConfigs));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(jsonResponse())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
fs.readdirSync('./app/routes').forEach(route => {
  let api = require(`./app/routes/${route}`)
  app.use(api.routes(), api.allowedMethods())
})

// error-handling
// error
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = err.message
    ctx.app.emit('error', err, ctx);
  }
})

module.exports = app
