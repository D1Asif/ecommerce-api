"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
var express_1 = __importDefault(require("express"));
var order_controller_1 = require("./order.controller");
var router = express_1.default.Router();
router.post('/', order_controller_1.OrderControllers.createANewOrder);
router.get('/', order_controller_1.OrderControllers.getAllOrders);
exports.OrderRoutes = router;
