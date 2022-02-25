// index.js
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
// 导入模板
const {
    controllerTemp,
    modelsTemp,
    routesTemp
} = require('./template')
// 生成文件
const generateFile = (path, data) => {
    if (fs.existsSync(path)) {
        errorLog(`${path}文件已存在`)
        return
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', err => {
            if (err) {
                errorLog(err.message)
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}
function transformStr(str) {
    return str.replace(str.substr(0, 1), function ($0) {
        return $0.toUpperCase();
    });
}
log('1.请输入需要模块名称,按Enter确定')
process.stdin.on('data', async chunk => {
    // 名称
    const inputName = String(chunk).trim().toString();
    const dirName = transformStr(inputName)
    try {
        const controllerFile = resolve('../app/controller', `${dirName}Controller.js`)
        const modelsFile = resolve('../app/models', `${dirName}Model.js`)
        const routesFile = resolve('../app/routes', `${dirName}Router.js`)

        log(`2.正在生成controller文件 ${controllerFile}`)
        await generateFile(controllerFile, controllerTemp(inputName))

        log(`3.正在生成model文件 ${modelsFile}`)
        await generateFile(modelsFile, modelsTemp(inputName))

        log(`4.正在生成router文件 ${routesFile}`)
        await generateFile(routesFile, routesTemp(inputName))

        successLog('5.模块生成成功')
    } catch (e) {
        errorLog(e.message)
    }
    process.stdin.emit('end')
})
process.stdin.on('end', () => {
    log('exit')
    process.exit()
})

function dotExistDirectoryCreate(directory) {
    return new Promise((resolve) => {
        mkdirs(directory, function () {
            resolve(true)
        })
    })
}
// 递归创建目录
function mkdirs(directory, callback) {
    var exists = fs.existsSync(directory)
    if (exists) {
        callback()
    } else {
        mkdirs(path.dirname(directory), function () {
            fs.mkdirSync(directory)
            callback()
        })
    }
}

