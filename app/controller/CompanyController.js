const CompanyModels = require("../models/CompanyModel");
const BaseController = require("./BaseController");

class CompanyController extends BaseController {
    constructor(args) {
        super(args);
    }

    /**
     * @description: 公司列表
     * @param {*} ctx
     * @return {*}
     */
    static async list(ctx) {
        let res;
        try {
            res = await CompanyModels.find();
            ctx.success(res)
        } catch (e) {
            ctx.fail(0, e.message)
        }

    }
}
module.exports = CompanyController;
