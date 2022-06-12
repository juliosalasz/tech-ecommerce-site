import express from "express";
import { getProducts } from "../controller/products";

const router = express.Router();

router.get("/", getProducts);

export default router;
