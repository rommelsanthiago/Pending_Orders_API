import { readOrders } from './readOrders';

import { invoiceLine } from '../models/invoiceLine';
import { NotFoundError } from '../helpers/customErrors';

export function validateInvoices(invoices: invoiceLine[]): boolean {
  const orders = readOrders('src/data/Pedidos');

  invoices.forEach(invoiceItem => {
    if (!orders[String(invoiceItem.id_pedido)]) {
      throw new NotFoundError(`Order ${invoiceItem.id_pedido} not found!`);
    };

    const orderNumberItems = orders[String(invoiceItem.id_pedido)]
      .map(orderItem => orderItem.número_item)
      .includes(invoiceItem.número_item);

    if (!orderNumberItems) {
      throw new NotFoundError(`Item ${invoiceItem.número_item} not found on order ${invoiceItem.id_pedido}!`);
    };
  });

  return true;
}