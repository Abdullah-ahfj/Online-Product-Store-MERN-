import express from "express";
import mongoose from "mongoose"; 
import Product from "../models/product.model.js";
import { createProduct, deleteProduct, getProducts, getProductsById, updatedProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductsById);
router.put("/:id", updatedProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;