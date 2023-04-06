import fs from "fs";

import { pendingItems } from "../models/pendingItems";
import { reportObj } from "../models/report";

import { getOrdersPending } from "../utils/getOrdersPending";
import { readOrders } from "../utils/readOrders";

import { OrdersRepository } from "./OrdersRepository";

export class OrdersBusiness {
    constructor(private OrdersDatabase: OrdersRepository) { }

    public balanceOrders = async () => {

        const paths = await this.OrdersDatabase.balanceOrders()

        const orders = readOrders(paths.pathOrders);
        const ordersPending = getOrdersPending(paths.pathOrders, paths.pathInvoices);

        const ordersTotal = [];
        
        for (const key in orders) {
            let total = 0;

            orders[key].forEach((line: any) => {
                total += line.quantidade_produto * parseFloat(line.valor_unitário_produto.replace(',', '.'));
            });

            ordersTotal.push({
                id_pedido: key,
                valor_total_pedido: total.toFixed(2).replace('.', ',')
            });
        };

        
        const finalReport: {}[] = [];

        for (const key in ordersPending) {
            const order = ordersTotal.filter(item => item.id_pedido === key);

            let pendingTotal = 0;

            const itens_pendentes: pendingItems[] = ordersPending[key].map((line: any) => {
                return {
                    número_item: line.número_item,
                    saldo_quantidade: line.quantidade_produto
                };
            }).sort((a: any, b: any) => {
                if (a.número_item < b.número_item) return -1;
                if (a.número_item > b.número_item) return 1;
                return 0;
            });

            ordersPending[key].forEach((line: any) => {
                pendingTotal += line.quantidade_produto * parseFloat(line.valor_unitário_produto.replace(',', '.'));
            });

            let reportObj: reportObj = {
                id_pedido: key,
                valor_total_pedido: order[0].valor_total_pedido,
                saldo_pendente: pendingTotal.toFixed(2).replace('.', ','),
                itens_pendentes
            }

            finalReport.push(reportObj);
        }

        const ordersToStringFormat = JSON.stringify(finalReport, null, 2);

        const fileName = 'pedidos-pendentes.txt'
        fs.writeFileSync(fileName, ordersToStringFormat);
        return `File ${fileName} created!, "Balance": ${ordersToStringFormat}`;
    }
}