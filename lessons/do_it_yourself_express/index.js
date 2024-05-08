const EventEmitter = require('events')
// const Router = require('./framework/router.js')
const Application = require('./framework/Application.js')
const userRouter = require('./src/user-router.js')
const jsoneParser = require('./middleWare/parseJson.js')
const parseUrl = require('./middleWare/parseUrl.js')


const PORT = process.env.PORT || 5000;

const app = new Application()

// const router = new Router()

// router.get('/users', (req, res) => {
//     res.end('....YOU SENT REQUEST TO /USERS')
// })
// router.get('/posts', (req, res) => {
//     res.end('....YOU SENT REQUEST TO /POSTS')
// })

app.use(jsoneParser)
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
