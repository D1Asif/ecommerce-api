import express from "express";

const router = express.Router();

router.post('/', (req, res) => {
    res.json({
        message: 'message from order route'
    })
})

export const OrderRoutes = router;