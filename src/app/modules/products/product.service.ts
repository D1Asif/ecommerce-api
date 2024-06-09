import { TProduct } from "./product.interface";
import { Product } from "./product.model"

const createNewProductInDB = async (productData: TProduct) => {
    const result = await Product.create(productData);

    return result;
}

const getAllProductsFromDB = async () => {
    const result = await Product.find();

    return result;
}

const getAProductByIdFromDB = async (productId: string) => {
    if (productId.length !== 24) throw new Error("Invalid product ID");

    const result = await Product.findById(productId);

    return result;
}

export const ProductServices = {
    createNewProductInDB,
    getAllProductsFromDB,
    getAProductByIdFromDB
}