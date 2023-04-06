import { app } from "./controllers/app";
import { ordersRouter } from "./controllers/routes/OrdersRoutes";

app.get('/', (req, res) => {
   // #swagger.tags = ['Test API']
   // #swagger.description = '<b>Endpoint de teste da API</b>'
   /* 
      #swagger.responses[200] = {
         schema: { $ref: "#/definitions/Test" },
         description: 'Teste de funcionamento'
      } 
   */

   return res.status(200).send({message: 'Tudo funcionando por aqui!'});
});

app.use('/', ordersRouter);
