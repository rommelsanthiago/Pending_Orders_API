import express from 'express'
import { AddressInfo } from "net";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

const swaggerFile = require('../../swagger-output.json')
import { errorMiddleware } from '../middlewares/error';

export const app = express()

app.use(express.json())
app.use(cors())
app.use(errorMiddleware)

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    };
});  

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
