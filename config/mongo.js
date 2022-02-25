// config/mongo.js
const mongoose = require('mongoose').set('debug', true); //生产环境设置成false
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const dbUrl = 'mongodb://localhost:27017/'
const dbName = 'koa_arsenal'

module.exports = {
    connect: () => {
        mongoose.connect(dbUrl + dbName, options)
        let db = mongoose.connection
        db.on('error', console.error.bind(console, '连接错误:'));
        db.once('open', () => {
            console.log('mongodb connect suucess');
        })
    }
}