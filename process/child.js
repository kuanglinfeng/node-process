// fork
// 创建一个子进程，执行node脚本
// fork('./child.js') 相当于spawn('node', ['./child.js'])

// 特点
// 会多出一个message事件，用于父子通信
// 会多出一个send方法

// 最佳实践：能用fork就不用spawn

const process = require('process')

setTimeout(() => {
  process.send({ foo: 'bar' })
}, 2000)

process.on('message', (message) => {
  console.log('子进程得到值：', message)
})

