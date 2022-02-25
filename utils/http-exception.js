// 默认的异常，其他异常类都是从该类继承
class HttpException extends Error {
    constructor(msg = '错误请求', code = 10000, status = 400) {
        super()
        this.code = code
        this.msg = msg
        this.status = status
    }
}

class ParameterException extends HttpException {
    constructor(msg, code) {
        super()
        this.status = 400
        this.msg = msg || '参数错误'
        this.code = code || 10000
    }
}

class AuthFailed extends HttpException {
    constructor(msg, code) {
        super()
        this.status = 401
        this.msg = msg || '授权失败'
        this.code = code || 10004
    }
}

class NotFound extends HttpException {
    constructor(msg, code) {
        super()
        this.status = 404
        this.msg = msg || '未找到该资源'
        this.code = code || 10005
    }
}

class Forbidden extends HttpException {
    constructor(msg, code) {
        super()
        this.status = 403
        this.msg = msg || '禁止访问'
        this.code = code || 10006
    }
}

class Oversize extends HttpException {
    constructor(msg, code) {
        super()
        this.status = 413
        this.msg = msg || '上传文件过大'
        this.code = code || 10007
    }
}

class InternalServerError extends HttpException {
    constructor(msg, code) {
        super()
        this.status = 500
        this.msg = msg || '服务器出错'
        this.code = code || 10008
    }
}

module.exports = {
    HttpException,
    ParameterException,
    AuthFailed,
    NotFound,
    Forbidden,
    Oversize,
    InternalServerError
}