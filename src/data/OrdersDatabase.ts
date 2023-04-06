import { OrdersRepository } from "../business/OrdersRepository";
import { paths } from "../models/paths";

export class OrdersDatabase implements OrdersRepository {
    public balanceOrders = async (): Promise<paths> => {

        const pathOrders = "src/data/Pedidos";
        const pathInvoices = "src/data/Notas";

        const paths: paths = { pathOrders, pathInvoices };

        return paths;
    }
}