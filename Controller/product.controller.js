import Product from "../Model/product.model.js";


export const bulkCreateProducts = async (req, res) => {
  try {
    const products = req.body;
  
    const createdProducts = await Product.bulkCreate(products, { validate: true });
    res.status(201).json({ message: "Products inserted successfully", data: createdProducts });
  } catch (error) {
    console.error("Error bulk inserting products:", error);
    res.status(500).json({ error: "Failed to insert products", details: error.message });
  }
};

// get all products 
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products", details: error.message });
  }
};
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Failed to fetch product", details: error.message });
  }
};
