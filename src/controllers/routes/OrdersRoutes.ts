import express from "express";

import { OrdersBusiness } from "../../business/OrdersBusiness";
import { OrdersController } from "../OrdersController";
import { OrdersDatabase } from "../../data/OrdersDatabase";

export const ordersRouter = express.Router();

const ordersDatabase = new OrdersDatabase();
const ordersBusiness = new OrdersBusiness(ordersDatabase);
const ordersController = new OrdersController(ordersBusiness);

ordersRouter.get('/balance', (req, res) => ordersController.getBalanceOrders(req, res));