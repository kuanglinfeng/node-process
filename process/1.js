const child_process = require('child_process')
const util = require('util')
const { exec } = child_process

// 1. 
// 执行命令ls后输出一些信息
// 子进程的运行结果存储在系统缓存之中，等到子进程运行结束以后
// 主进程再用回调函数读取子进程的运行结果
exec('ls ../', (error, stdout, stderr) => {
  console.log(error)
  console.log(stdout)
  console.log(stderr)  
})

// 2.
// 通过流 输出结果和上面一样 返回两个流
const streams = exec('ls ../')
streams.stdout.on('data', (chunk) => {
  console.log(chunk)
})

streams.stderr.on('data', (chunk) => {
  console.log(chunk)
})

// 3. 
// promise化
const exec2 = util.promisify(exec)

exec2('ls ../').then(data => {
  console.log(data.stdout)
})

// 4. 
// 注意 exec这个api是十分危险的 因为它可被注入
const userInput = '. && pwd'

exec2(`ls ${userInput}`).then(data => {
  console.log(data.stdout)
})

// 可使用 execFile 来替代 exec 详情见 2.js

