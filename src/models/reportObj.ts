import { pendingItems } from './pendingItems';

export interface reportObj {
  id_pedido: string;
  valor_total_pedido: string;
  saldo_pendente: string;
  itens_pendentes: pendingItems[]
}
