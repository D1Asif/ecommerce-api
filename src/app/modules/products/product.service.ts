import { TProduct } from "./product.interface";
import { Product } from "./product.model"

const createNewProductInDB = async (productData: TProduct) => {
    const result = await Product.create(productData);
    
    return result;
}

export const ProductServices = {
    createNewProductInDB
}