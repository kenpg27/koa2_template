const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Schema
const initSchema = new Schema({
    _id: { type: ObjectId }, // 默认生成，不加也可以
})

// Model
const model = mongoose.model('company', initSchema);

module.exports = model;