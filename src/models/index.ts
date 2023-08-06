import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config";
import { SequelizeType, Tables } from "./types";
import ProductsModel from "./products.model";

export const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db: {
  sequelize: SequelizeType;
  Sequelize: typeof Sequelize;
  Product: Tables;
} = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Product: ProductsModel(sequelize),
};

export default db;
