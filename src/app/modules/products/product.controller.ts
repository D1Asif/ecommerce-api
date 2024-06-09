import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { productUpdateValidationSchema, productValidationSchema } from "./product.validation";

const createNewProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;

        const { success, data, error } = productValidationSchema.safeParse(productData);

        if (!success) {
            res.status(500).json({
                success: false,
                message: (error.issues.map(({ path, message }, index) => {
                    return `${index + 1}. Field: ${path.join(" > ")}, Issue: ${message}`
                })).join("; ")
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

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductsFromDB();

        if (result.length > 0) {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result
            })
        } else {
            res.status(400).json({
                success: false,
                message: "No products found!"
            })
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message ?? "Something went wrong"
        })
    }
}

const getAProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;

        const result = await ProductServices.getAProductByIdFromDB(productId);

        if (result) {
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result
            })
        } else {
            res.status(400).json({
                success: false,
                message: `Product not found`
            })
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message ?? "Something went wrong"
        })
    }
}

const updateAProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const dataToUpdate = req.body;

        const { success, data, error } = productUpdateValidationSchema.safeParse(dataToUpdate);

        if (!success) {
            res.status(500).json({
                success: false,
                message: (error.issues.map(({ path, message }, index) => {
                    return `${index + 1}. Field: ${path.join(" > ")}, Issue: ${message}`
                })).join("; ")
            })
        }

        if (success && data) {
            const result = await ProductServices.updateAProductInDB(productId, data);

            if (result) {
                res.status(200).json({
                    success: true,
                    message: "Product updated successfully!",
                    data: result
                })
            } else {
                res.status(500).json({
                    success: false,
                    message: "Product is not updated",
                })
            }
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message ?? "Something went wrong"
        })
    }
}

export const ProductControllers = {
    createNewProduct,
    getAllProducts,
    getAProductById,
    updateAProduct
}