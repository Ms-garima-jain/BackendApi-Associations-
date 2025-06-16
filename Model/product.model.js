import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  imageUrl: { type: DataTypes.STRING },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  description: { type: DataTypes.TEXT },
  sku: { type: DataTypes.STRING, allowNull: false, unique: true }
}, {
  timestamps: true
});

sequelize.sync()
  .then(() => {
    console.log("Product table created");
  })
  .catch((err) => {
    console.log("Error creating Product table:", err);
});

export default Product;
