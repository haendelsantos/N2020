const Sequelize = require('sequelize')
const sequelize = new Sequelize('logs', 'root', 'root', {
    'host': "127.0.0.1",
    'dialect': 'mysql',
    'port': 10001,
    define: {
        timestamps: false,
        underscored: true
    }
})

const ContainersPosicoes = sequelize.define('container_posicoes', {
    date_time_posicao: {
        type: Sequelize.DATE
    },
    longitude: {
        type: Sequelize.STRING
    },
    latitude: {
        type: Sequelize.STRING
    },
    temperatura: {
        type: Sequelize.STRING
    },
    container_id: {
        type: Sequelize.INTEGER
    },
    gps_id: {
        type: Sequelize.INTEGER
    }
});

var logGps = {
    save(message) {
        ContainersPosicoes.create({
            date_time_posicao: message.date,
            longitude: message.longitude,
            latitude: message.latitude,
            temperatura: message.temp,
            container_id: message.container_id,
            gps_id: message.gps_id
        })

        return true;
    }
}

module.exports = logGps;