const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes')
const dotenv = require('dotenv')

const app = express();
const server = http.Server(app);
const io = socketio(server);

dotenv.config()

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

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(process.env['NODE_PORT'])
