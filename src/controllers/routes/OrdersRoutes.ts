import express from "express";

import { OrdersBusiness } from "../../business/OrdersBusiness";
import { OrdersController } from "../OrdersController";
import { OrdersDatabase } from "../../data/OrdersDatabase";

export const ordersRouter = express.Router();

const ordersDatabase = new OrdersDatabase();
const ordersBusiness = new OrdersBusiness(ordersDatabase);
const ordersController = new OrdersController(ordersBusiness);

ordersRouter.get('/balance', (req, res) => {
    // #swagger.tags = ['Balance orders']
    // #swagger.description = '<b>Endpoint para retornar o balanço dos pedidos pendentes, não necessita passar parâmetros</b>'

    /* 
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/Pedido" },
            description: 'Pedidos pendentes'
        } 
    */
    ordersController.getBalanceOrders(req, res)
});
