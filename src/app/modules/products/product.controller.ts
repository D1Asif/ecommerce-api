import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { productValidationSchema } from "./product.validation";

const createNewProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;

        const { success, data, error } = productValidationSchema.safeParse(productData);
        
        if (!success) {
            res.status(500).json({
                success: false,
                message: (error.issues.map(({message}) => message)).join(", ")
            })
        }

        if (success && data) {
            const result = await ProductServices.createNewProductInDB(data);

            res.status(201).json({
                success: true,
                message: "Product created successfully!",
                data: result
            })
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message ?? "Something went wrong"
        })
    }
}

export const ProductControllers = {
    createNewProduct
}