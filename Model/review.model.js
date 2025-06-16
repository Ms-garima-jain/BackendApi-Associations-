import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Review = sequelize.define("Review", {
  rating: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.TEXT },
}, {
  timestamps: false
});
sequelize.sync()
  .then(() => {
    console.log("Review  table created");
  })
  .catch((err) => {
    console.log("Error creating Product table:", err);
});


export default Review;
