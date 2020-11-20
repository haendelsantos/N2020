const mosca = require('mosca');
const broker = new mosca.Server({port: 1883})


broker.on('ready', () => {
    console.log('Broker is ready')
})