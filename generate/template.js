// template.js
function transformStr(str) {
    return str.replace(str.substr(0, 1), function ($0) {
        return $0.toUpperCase();
    });
}
module.exports = {
    controllerTemp: (name) => {
        let Tname = transformStr(name);
        return `
const ${Tname}Model = require("../models/${Tname}Model");
const BaseController = require("./baseController");

class ${Tname}Controller extends BaseController {
    constructor(args) {
        super(args);
    }
}
module.exports = ${Tname}Controller;`;
    },
    modelsTemp: (name) => {
        return `
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Schema
const initSchema = new Schema({
    _id: { type: ObjectId }, // 默认生成，不加也可以
})

// Model
const model = mongoose.model('${name}', initSchema);

module.exports = model;
        `;
    },
    routesTemp: (name) => {
        let Tname = transformStr(name);
        return `
const router = require('koa-router')()
const ${Tname}Controller = require('../controller/${Tname}Controller')

router.prefix('/${name}')

module.exports = router
`;
    },
};
