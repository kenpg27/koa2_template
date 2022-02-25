function jsonResponse(option = {}) {
    return async (ctx, next) => {
        ctx.success = function (data) {
            ctx.type = option.type || 'json'
            ctx.body = {
                code: option.successCode || 200,
                msg: option.successMsg || 'success',
                data: data
            }
        }
        ctx.fail = function (code, msg) {
            ctx.type = option.type || 'json'
            ctx.body = {
                code: code || option.failCode || 0,
                msg: msg || option.successMsg || 'fail',
                data: null
            }
        }
        await next()
    }
}

module.exports = jsonResponse