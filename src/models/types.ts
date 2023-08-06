import { Model, ModelStatic } from "sequelize";
import { sequelize } from ".";

export type SequelizeType = typeof sequelize;
export type Tables = ModelStatic<Model<any, any>>;
