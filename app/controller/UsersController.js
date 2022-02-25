const UsersModels = require("../models/UsersModel");
const BaseController = require("./BaseController");

class UsersController extends BaseController {
    constructor(args) {
        super(args);
    }

    /**
     * @description: 用户列表
     * @param {*} ctx
     * @return {*}
     */
    static async list(ctx) {
        let res;
        try {
            res = await UsersModels.find();
            ctx.success(res)
        } catch (e) {
            ctx.fail(0, e.message)
        }

    }
}
module.exports = UsersController;
