import { Response } from "express"

const express = require('express')
const cors = require('cors')
const router = require('./router/index.ts')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const PORT = process.env.PORT || 8000

const app = express()
app.use(cookieParser())

const options = {
    "credentials": true,
    "origin": process.env.CLIENT_URL,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
// app.options('/employee/:id', cors(options));
// app.post('/employee/:id', cors(options), (req:Request, res: Response) => {
//   console.info("POST /issue-2");
//   res.json({
//     text: "Issue #2 is fixed."
//   });
// });
app.use(cors(options))
app.use(express.json())
app.use('/api', router)

app.listen(PORT, console.log(`Server started on PORT:${PORT}`))