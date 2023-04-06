const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger-output.json'
const endpointsFiles = ['./dist/index.js', './dist/controllers/routes/OrdersRoutes.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "ORDERS API",
        description: "<b>Documentação gerada automaticamente pelo módulo</b> <a href='https://github.com/davibaltar/swagger-autogen#readme' target='_blank' >swagger-autogen</a>."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Pedido: {      
            id_pedido: 999,
            valor_total_pedido: "999,99",
            saldo_pendente: "999,99",
            itens_pendentes: [
                {
                número_item: 9,
                saldo_quantidade: 99
                }
            ]
        },
        Test: {
            message: 'Tudo funcionando por aqui!'
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./dist/index.js')
})