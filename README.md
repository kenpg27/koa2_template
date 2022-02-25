# vit_koa2_template

一个开箱即用，快速搭建小型应用的 Koa2+mongoose+...模板框架。项目进行了分层，包含 controller、models、routes 。并集成了自动化模板生成，JSON 格式返回等中间件，可以放心使用。

### 项目目录结构

```

├── app
│   ├── controller  // 控制器
│   ├── models      // models层
|   └── routes      // 路由
├── bin             // 启动文件
├── config          // 配置文件
├── generate        // 模板生成器
├── middleware      // 中间件
├── public          // 静态文件
├── utils           // 公用方法
├── app.js          // 类型定义
├── package.json    // ts配置
└── start.js        // vite全局配置

```

## 🤖 支持自动生成文件

⚙️ 代码文件自动生成，预设模板`controller`,`models`,`routes`，也可以根据自己需要设计更多自动生成脚本。一般后端同学惯用此形式，十分高效。

执行 npm run new 后，输入模块名称，如：test

## ⭐️ Show Your Support

如果该模板给您带来了帮助，希望能给个 star!

Please give a ⭐️ if this project helped you!

## 👏 Contributing

如果您有任何问题或请求，或想为“moveable”或其他包做出贡献，请写[issue](https://github.com/kenpg27/koa2_template/issues)或给我一个 Pull Request 自由。

If you have any questions or requests or want to contribute to `koa2_template` or other packages, please write the [issue](https://github.com/kenpg27/koa2_template/issues) or give me a Pull Request freely.

## 🐞 Bug Report

如果你发现一个错误，请在 GitHub 上打开一个新的[Issue](https://github.com/kenpg27/koa2_template/issues)报告给我们。

If you find a bug, please report to us opening a new [Issue](https://github.com/kenpg27/koa2_template/issues) on GitHub.
