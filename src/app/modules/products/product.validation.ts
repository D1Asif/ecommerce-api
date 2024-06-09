import { z } from "zod";

const variantValidationSchema = z.object({
    type: z.string().min(1, 'Variant type is required'),
    value: z.string().min(1, 'Variant value is required')
});

export const productValidationSchema = z.object({
    name: z.string().min(1, 'Product name is required'),
    description: z.string()
        .min(1, 'Product description is required')
        .max(2000, 'Product description must not exceed 2000 characters'),
    price: z.number().positive('Product price must be a positive number'),
    category: z.string().min(1, 'Product category is required'),
    tags: z.array(z.string()).nonempty('At least one product tag is required'),
    variants: z.array(variantValidationSchema).nonempty('At least one product variant is required'),
    inventory: z.object({
        quantity: z.number().nonnegative('Inventory quantity must be a non-negative number'),
        inStock: z.boolean()
    })
});