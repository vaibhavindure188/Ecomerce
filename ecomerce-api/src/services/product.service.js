const Category = require("../models/category.module");
const Product = require("../models/product.module");

const createProduct = async (reqData) => {
  let topLevelCategory = await Category.findOne({ name: reqData.topLevelCategory });
  if (!topLevelCategory) {
    topLevelCategory = await Category.create({
      name: reqData.topLevelCategory,
      level: 1,
    });
  }
  let secondLevelCategory = await Category.findOne({
    name: reqData.secondLevelCategory,
  });
  if (!secondLevelCategory) {
    secondLevelCategory = await Category.create({
      name: reqData.secondLevelCategory,
      level: 2,
      parentCategory: topLevelCategory._id,
    });
  }

  let thirdLevelCategory = await Category.findOne({
    name: reqData.thirdLevelCategory,
  });
  if (!thirdLevelCategory) {
    thirdLevelCategory = await Category.create({
      name: reqData.thirdLevelCategory,
      level: 3,
      parentCategory: secondLevelCategory._id,
    });
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountPresent: reqData.discountPresent,
    imageUrl: reqData.imageUrl,
    price: reqData.price,
    sizes: reqData.sizes,
    category: thirdLevelCategory._id,
    quantity: reqData.quantity,
  });

  return await product.save();
};

const deleteProduct = async (productId) => {
  const product = await findProductById(productId);
  await Product.findByIdAndDelete(product._id);
  return "product deleted successfully";
};

const updateProduct = async (productId, reqData) => {
  return await Product.findByIdAndUpdate(productId, reqData);
};

const findProductById = async (productId) => {
  // console.log("in product service, product reached = ", productId)
  const product = await Product.findById(productId).populate("category").exec();
  // console.log("in product service, product = ", product)
  if (!product) throw new Error("product not found");
  return product;
};

const getAllProduct = async (reqData) => {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;
  let query = Product.find().populate("category"); // this query is not executed , untill we aply await

  // now lets do the sorting of product which are in query
  if (category) {
    // console.log("in product.services, category= ", category)
    const isCategoryExits = await Category.findOne({ name: category });
    if (isCategoryExits){
      query = query.where("category").equals(isCategoryExits._id);
    // console.log('query : ', query)
    }

    else {
      return { content: [], currentPage: 1, totalPage: 0 };
    }
  }

  if (color) {
    // this color will have string  =  "red, blue, red, green"
    const colorSet = new Set(
      color.split("_").map((color) => color.trim().toLowerCase())
    );
    // console.log('in product.service -> colorSet : ', colorSet)
    let colorRegEx = null;
    if (colorSet.size > 0) {
      
      colorRegEx = new RegExp([...colorSet].join("|"), "i");
      // console.log('color regular exp = ',colorRegEx)
    }
    query = query.where("color").regex(colorRegEx);
  }

  if (sizes) {
    const sizeSet = new Set(sizes.split("_"));
    query = query.where("sizes.name").in([...sizeSet]);
  }

  if (minPrice && maxPrice) {
    query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }
  if (minDiscount) {
    // console.log('in product.service, minDiscount = ', minDiscount)
    query = query.where("discountPresent").gte(minDiscount);
  }
  if (stock) {
    // console.log('in product.service, stock = ', stock)
    if (stock == "In-Stock") {
      query = query.where("quantity").gte(1);
    } else query = query.where("quantity").lte(0);
  }
  if (sort) {
    const sortDirection = sort == "dec" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }

  const totalProduct = await Product.countDocuments(query);
  const totalPages = Math.ceil(totalProduct / pageSize);
  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);
  const products = await query.exec();
  // console.log("in backend product.service -> all products are " , products)
  return { content: products, currentPage: pageNumber, totalPages };
};

const createMultipleProduct = async (products) => {
  for (let product of products) {
    await createProduct(product);
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProduct,
  createMultipleProduct,
};
