import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { router } from './Router/routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const addr = server.address() as AddressInfo;
      console.log(`Server is running in ${addr.address}:${addr.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   };
});  