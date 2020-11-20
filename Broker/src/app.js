const mosca = require('mosca');
const config = require('config')
const broker = new mosca.Server({port: config.get('broker.port')})

broker.on('ready', () => {
    console.log('Broker esta Rodando!')
})