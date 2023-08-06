import { Context, Hono } from "hono";
import productController from "../controllers/productController";

const v1 = new Hono();

v1.get("/product", productController.getProduct);
v1.post("/product", productController.createProduct);
v1.delete("/product", productController.removeProduct);

v1.get("/*", (c: Context) => c.json({ status: 404, message: "wrong path" }));
export default v1;
