import express from "express";
import mongoose from "mongoose";
import Product from "../modules/product.model.js";
import { createProduct, deleteProduct, getProducts, updatedProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updatedProduct);

export default router;