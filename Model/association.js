import User from "../Model/user.model.js";
import Profile from "../Model/profile.model.js";
import order from "./order.model.js";
import Product from "./product.model.js";
import Review from "./review.model.js";

  User.hasOne(Profile, { foreignKey: "userId" });
  Profile.belongsTo(User, { foreignKey: "userId" });
  User.hasMany(order,{foreignKey:"userId"});
  order.belongsTo(User, {foreignKey:"userId"})
  User.belongsToMany(Product,{
    through:Review,
    foreignKey:"userId",
    otherKey:"productId"
  })
  Product.belongsToMany(User,{
    through:Review,
    foreignKey:"productId",
    otherKey:"userId"
  })

   export {User, Profile}

