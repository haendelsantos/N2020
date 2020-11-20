const mqtt = require('mqtt')
const express = require('express')
const message = require('./mockedMessage')
const config = require('config')
const client = mqtt.connect(config.get('broker.endpoint') + config.get('broker.port'))
const topic = config.get('broker.topic')
const app = express()

let logMessage = [];
logMessage.push(message.getMessage())

setInterval(() => {
console.log('message sent!', logMessage)
client.on('connect', () => {
    client.publish(topic, logMessage)
    console.log('message sent!', logMessage)
})

}, 1000)

app.get('/', (req, res) => {
    res.send(logMessage)
})

app.listen(config.get('web.port'), config.get('web.host'))