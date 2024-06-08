import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'message from product route'
    })
})

export const ProductRoutes = router;

