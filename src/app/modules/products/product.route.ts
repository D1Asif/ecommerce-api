import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post('/', ProductControllers.createNewProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getAProductById);

export const ProductRoutes = router;

