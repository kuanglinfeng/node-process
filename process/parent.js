const child_process = require('child_process')

const parent = child_process.fork('./child.js')

parent.on('message', (message) => {
  console.log('父进程得到值:', message)
})

parent.send({ hello: 'world' })
