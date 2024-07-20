const productService = require("../services/product.service.js");

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send({ error_is: e.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    return res
      .status(200)
      .send({ product, message: "product deleted success" });
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const findProductById = async (req, res) => {
  try {
    const product = await productService.findProductById(req.params.id);
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await productService.getAllProduct(req.query);
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const createMultipleProduct = async (req, res) => {
  try {
    const product = await productService.createMultipleProduct(req.body);
    return res.status(200).send("products added successfully");
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

module.exports = {
    // all these will be used by admin only
  createProduct,  // require req.body
  deleteProduct,   // require productId in params
  updateProduct,  // params, req.body
  findProductById,  // params //used by customer
  getAllProduct,   //req.query it will be used by both customer(to see the data on ui) and admin(to check products)
  createMultipleProduct, // req.body
};
