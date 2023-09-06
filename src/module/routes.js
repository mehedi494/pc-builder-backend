const express = require("express");
const { controller } = require("./controller");
const router = express.Router();

router.get("/", controller.test);
router.get("/products", controller.getAllProducts);
router.get("/products/:id", controller.getSingleProduct);



module.exports = { router };
