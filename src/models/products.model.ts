import { DataTypes } from "sequelize";
import { SequelizeType } from "./types";

const ProductsModel = (sequelize: SequelizeType) => {
  const Products = sequelize.define("product", {
    pid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.CHAR,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    desc: {
      type: DataTypes.TEXT,
    },
  });
  return Products;
};

export default ProductsModel;
