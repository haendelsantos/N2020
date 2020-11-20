var mockedMessage = {
    getMessage() {
        return {
            'date': new Date(),
            'longitude': (Math.random()*360-180).toFixed(8),
            'latitude': (Math.random()*180-90).toFixed(8),
            'temp': Math.random() * (40 - 10) + 10,
            'gps_id': 1234,
            'container_id': 4321
        };
    }
}

module.exports = mockedMessage;