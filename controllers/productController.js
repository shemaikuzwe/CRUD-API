const Prouduct = require("../models/product.model");
async function getProducts(req, res) {
  try {
    const products = await Prouduct.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function getProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await Prouduct.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function createProduct(req, res) {
  try {
    const product = await Prouduct.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Prouduct.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({ error: "product not found" });
    }
    const updatedproduct = await Prouduct.findById(id);
    res.status(200).json(updatedproduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Prouduct.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json("error:product not found");
    }
    res.status(200).json("product deleted successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
