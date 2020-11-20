const mqtt = require('mqtt');
const config = require('config')
const client = mqtt.connect('mqtt://localhost:1883')
const topic = config.get('broker.topic')
const logGps = require('./ContainersPosicoes')


client.on('message', (topic, message) => {
    let values = JSON.parse(message)
    logGps.save(values)
})

client.on('connect', () => {
    client.subscribe(topic)
})