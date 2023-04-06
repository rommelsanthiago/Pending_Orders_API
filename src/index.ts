import { app } from "./controllers/app";
import { ordersRouter } from "./controllers/routes/OrdersRoutes";

app.get('/', (req, res) => {
   return res.status(200).send("Api de pedidos pendentes");
});

app.use('/orders/', ordersRouter);
