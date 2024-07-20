const { default: mongoose } = require("mongoose");
const Address = require("../models/address.model.js");
const Order = require("../models/order.module.js");
const OrderItem = require("../models/orderItem.js");
const cartService = require("../services/cart.service.js");


const createOrder = async (user, shippingAddress) => {
  let address;
  if (shippingAddress._id) {
    address = await Address.findById(shippingAddress._id);
  } else {
    address = new Address(shippingAddress);
    address.user = user._id;
    const createdAddress = await address.save();
    user.address.push(createdAddress);
    await user.save();
  }

  let orderItems = [];
  const cart = await cartService.findUserCart(user._id);

  for (let item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      quantity: item.quantity,
      discountedPrice: item.discountedPrice,
      userId: item.userId,
      size: item.size,
      product: item.product,
    });
    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem); // Fixed typo here
  }
  const createOrder = new Order({
    user,
    orderItems,
    orderDate: new Date(), // Added this line
    deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Added this line, example 7 days later
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    totalItems: cart.totalItems,
    shippingAddress: address,
    orderStatus : "PLACED",
    paymentDetails: {
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      discount: cart.discount || 0, // Added discount line
      totalItems: cart.totalItems,
    },
  });

  const createdOrder = await createOrder.save();
  return createdOrder;
};
const placeOrder = async (orderId) => {
  const order = await findOrderById(orderId); // you might need to remove this await , because due to await this query will execute immediatly 
  order.orderStatus = "PLACED";
  order.paymentDetails = "COMPLETED";
  return await order.save();
};

const confirmOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "CONFIRMED";
  return await order.save();
};

const shippedOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "SHIPPED";
  return await order.save();
};

const deleverOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "DELEVERED";
  return await order.save();
};

const cancelledOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "CANCELLED";
  return await order.save();
};

const findOrderById = async(orderId) => {
  
  try {
    return await Order.findById(orderId)
      .populate("user")
      .populate({ 
        path: "orderItems",
        populate: { path: "product" },
      });
  } catch (e) {
    throw new Error(e.message);
  }
};

const userOrderHistory = async(userId) => {
  // console.log("we reached")
  try {
    return  await Order.find({ user: userId , orderStatus: "PLACED"})
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
      
  } catch (e) {
    throw new Error(e.message);
  }
};

const getAllOrders = async () => {
  try {
    return await Order.find()
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
  } catch (e) {
    throw new Error(e.message);
  }
};

const deleteOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    return await Order.findByIdAndRemove(order._id);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  deleteOrder,
  getAllOrders,
  userOrderHistory, // for customer
  findOrderById,  // for customer
  createOrder,   // for customer
  placeOrder,
  confirmOrder,
  shippedOrder,
  deleverOrder,
  cancelledOrder,  
};
