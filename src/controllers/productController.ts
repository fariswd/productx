import { Context } from "hono";
import { errorBuilder, successBuilder } from "../helpers/responseBuilder";
import db from "../models";

const getProduct = async (c: Context) => {
  try {
    const productList = await db.Product.findAll();
    const response = successBuilder({ data: productList });
    return c.json(response);
  } catch (error) {
    const errResponse = errorBuilder({
      status: 500,
      data: {
        msg: "getProduct error",
        error: error,
      },
    });
    return c.json(errResponse, 500);
  }
};

const createProduct = async (c: Context) => {
  try {
    const body = await c.req.json();
    const product = await db.Product.create({
      name: body.name,
      price: body.price,
      desc: body.desc,
    });
    const response = successBuilder({ data: product });
    return c.json(response);
  } catch (error) {
    const errResponse = errorBuilder({
      status: 500,
      data: {
        msg: "createProduct error",
        error: error,
      },
    });
    return c.json(errResponse, 500);
  }
};

const removeProduct = async (c: Context) => {
  try {
    const body = await c.req.json();
    const deleteProduct = await db.Product.destroy({
      where: {
        pid: body.pid,
      },
    });
    const response = successBuilder({ data: deleteProduct });
    return c.json(response);
  } catch (error) {
    const errResponse = errorBuilder({
      status: 500,
      data: {
        msg: "getProduct error",
        error: error,
      },
    });
    return c.json(errResponse, 500);
  }
};

export default {
  getProduct,
  createProduct,
  removeProduct,
};
