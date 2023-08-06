import { Dialect } from "sequelize";
import "dotenv/config";

export default {
  HOST: process.env.DB_HOST ?? "",
  USER: process.env.MYSQLDB_USER ?? "",
  PASSWORD: process.env.MYSQLDB_ROOT_PASSWORD ?? "",
  DB: process.env.MYSQLDB_DATABASE ?? "",
  port: Number(process.env.MYSQL_PORT ?? 3306),
  dialect: "mysql" as Dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
