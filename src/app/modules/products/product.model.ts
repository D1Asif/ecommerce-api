import { Schema, model } from "mongoose";
import { TProduct, TVariant } from "./product.interface";

const variantSchema = new Schema<TVariant>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true,
        default: []
    },
    variants: {
        type: [variantSchema],
        required: true
    },
    inventory: {
        quantity: {
            type: Number,
            required: true
        },
        inStock: {
            type: Boolean,
            required: true
        }
    }
})

export const Product = model("Product", productSchema);



