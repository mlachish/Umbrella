require('dotenv').config()
const express = require('express')
const app = express()
const port: Number | String = process.env.PORT || 4000

app.listen(port, (): void => console.log('app listening on port ' + port))
