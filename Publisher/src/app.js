const mqtt = require('mqtt')
const express = require('express')
const message = require('./mockedMessage')
const config = require('config')
const client = mqtt.connect(config.get('broker.endpoint') + config.get('broker.port'))
const topic = config.get('broker.topic')
const app = express()

client.on('connect', () => {
    setInterval(() => {    
        
        client.publish(topic, JSON.stringify(message.getMessage()))

        console.log('Mensagem enviada:!')

    }, 10000)
})

