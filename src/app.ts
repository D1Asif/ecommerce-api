import express, { Request, Response } from 'express'
import { ProductRoutes } from './app/modules/products/product.route';
import { OrderRoutes } from './app/modules/orders/order.route';
const app = express();

app.use(express.json());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;