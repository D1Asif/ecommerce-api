import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'message from order route'
    })
})

export const OrderRoutes = router;