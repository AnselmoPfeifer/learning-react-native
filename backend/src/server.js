const express = require('express') 
const mongoose = require('mongoose')
const routes = require('./routes')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

const mongoDbName = process.env['MONGO_DATABASE_NAME']
const mongoDbUserName = process.env['MONGO_USER_NAME']
const mongoDbPassword = process.env['MONGO_USER_PASSWORD']
const mongoDbConnectionOptions = process.env['MONGO_OPTIONS']
const mongoDbServerUrl = process.env['MONGO_DATABASE_HOST_URL']

mongoose.connect(
    `mongodb+srv://${mongoDbUserName}:${mongoDbPassword}@${mongoDbServerUrl}/${mongoDbName}?${mongoDbConnectionOptions}`, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use(cors({ origin: process.env['FRONTEND_URL']}))
app.use(express.json())
app.use(routes)
app.listen(process.env['NODE_PORT'])
