
const { config } = require('./config/default')

const app = require('./app/index')

// console.log(config)
app.listen(config.port, () => {
  console.log(`server is running on http://localhost:${config.port}`)
})
