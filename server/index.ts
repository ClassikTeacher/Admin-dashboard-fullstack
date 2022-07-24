const express = require('express')
const cors = require('cors')
const router = require('./router/index.ts')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const PORT = process.env.PORT || 8000

const app = express()
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use('/api', router)

app.listen(PORT, console.log(`Server started on PORT:${PORT}`))