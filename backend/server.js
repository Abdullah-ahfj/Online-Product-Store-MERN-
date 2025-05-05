import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js"
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors());

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/products", productRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at https://localhost:${PORT}`);
});

