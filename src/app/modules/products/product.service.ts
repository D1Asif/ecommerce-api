import { TProduct, TUpdateProduct } from "./product.interface";
import { Product } from "./product.model"

const createNewProductInDB = async (productData: TProduct) => {
    const response = await Product.create(productData);

    return response;
}

const getAllProductsFromDB = async () => {
    const response = await Product.find();

    return response;
}

const getAProductByIdFromDB = async (productId: string) => {
    if (productId.length !== 24) throw new Error("Invalid product ID");

    const response = await Product.findById(productId);

    return response;
}

const updateAProductInDB = async (productId: string, dataToUpdate: TUpdateProduct) => {
    if (!dataToUpdate) throw new Error("Update data is required for product update");

    const response = await Product.updateOne(
        {_id: productId},
        {...dataToUpdate}
    );

    if (response.acknowledged === true) {
        const updatedProduct = await Product.findById(productId);
        return updatedProduct;
    }

    return null;
}

export const ProductServices = {
    createNewProductInDB,
    getAllProductsFromDB,
    getAProductByIdFromDB,
    updateAProductInDB
}