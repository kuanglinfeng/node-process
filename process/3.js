// spawn 产卵
// 用法与execFile方法类似，没有回调，只能通过流来获取结果
// 没有最大缓存为200kb的限制（因为是流）

// 最佳实践：能用spawn的时候就不要用execFile

const child_process = require('child_process')
const { spawn } = child_process

const streams = spawn('ls', ['../'])

streams.stdout.on('data', (chunk) => {
  console.log(chunk.toString())
})

streams.stderr.on('data', (chunk) => {
  console.log(chunk.toString())
})