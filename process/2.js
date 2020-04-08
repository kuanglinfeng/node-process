// execFile 执行特定的程序
// 命令行的参数要用数组形式传入，无法注入

const child_process = require('child_process')
const { execFile } = child_process

const userInput = '. && pwd'

// 报错
// { Error: Command failed: ls -la . && pwd
// ls: . && pwd: No such file or directory
execFile('ls', ['-la', userInput], {
  // 1. 命令执行的目录
  cwd: '/Users/Flinn/Desktop/node-process',
  // 2. 环境变量
  // env: {NODE_ENV: 'development'}
  // 3. 要用什么shell 在cmd里不能执行ls命令
  // shell: bash
  // 4. 最大缓存：默认1024 * 1024
  // maxBuffer: 可以自己设置
}, (error, stdout) => {
  console.log(error)
  console.log(stdout)
})

// 它可以防注入，其它用法和exec差不多