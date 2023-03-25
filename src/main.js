// 1.导入app
const app = require('./app')
// const { SERVER_PORT } = require('/config/server')

// 2.将app启动起来
app.listen(8000, () => {
  console.log('coderhub的服务器启动成功')
})