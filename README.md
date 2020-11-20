# DSRPT21

Entrega de simulação de registro de logs para rastreamento de containers. O projeto consiste em conter uma api que implementa os logs de rastreio de containers utilizando algum protocolo de comunicação para IoT.

## Getting Started

O projeto está em node.js utilizando o pacote mosca para realizar a interação como broker MQTT para nossos testes. Existem 3 pastas, onde cada pasta funciona como um projeto separado.

**Publisher:** Uma simulação de um envio contínuo de logs do gps para o broker MQTT.

**Broker:** Uma simulação de um Broker MQTT utilizando o pacote Mosca para enviar as mensagens para seus tópicos.

**Subscriber:** A API em si que receberá os valores enviados pelos gps e salvar no banco de dados.

## Prerequisites

[Docker Compose](https://docs.docker.com/compose/install/) - Como instalar

[Nodejs](https://nodejs.org/en/download/) - Como instalar

## Installing

### Publisher

Install Dependencies
```
npm install
```
Start Server
```
npm start
```
### Broker
Install Dependencies
```
npm install
```
Start Server
```
npm start
```

### Subscriber

Start Database
```
docker-compose up -d
```
Install Dependencies
```
npm install
```
Start Server
```
npm start
```

## Authors

* **Lucas Gomes Moreira**
* **Gustavo Artiolli**
*	**Niccolas Paschoal**
*	**Rogerio da Silva Melo**
*	**Guilherme Haendel Santos**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
