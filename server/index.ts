const express = require('express')
const cors = require('cors')
const router = require('./router/index.ts')
require('dotenv').config()

const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, console.log(`Server started on PORT:${PORT}`))