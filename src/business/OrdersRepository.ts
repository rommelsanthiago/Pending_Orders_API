import { paths } from "../models/paths";

export interface OrdersRepository {
    balanceOrders(): Promise<paths>
};
