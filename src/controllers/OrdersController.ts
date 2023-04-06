import { Request, Response } from "express";

import { OrdersBusiness } from "../business/OrdersBusiness";

export class OrdersController {
    constructor(private ordersBusiness: OrdersBusiness) { }
    
    public getBalanceOrders = async (req: Request, res: Response) => {

        const balance = await this.ordersBusiness.balanceOrders()

        res.status(200).send(balance);
    }
}