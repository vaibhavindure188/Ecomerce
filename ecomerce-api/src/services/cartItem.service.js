const CartItem = require("../models/cartItem.module.js");
const UserService = require("../services/user.service.js");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) throw new Error("cart itom is not present", cartItemId);

    const user = await UserService.getUserByUserId(userId)
    if(!user) throw new Error("user is not found", userId)
        
    if(user._id.toString() == userId.toString()){
        item.quantity = cartItemData.quantity,
        item.price = cartItemData.quantity * item.product.price,
        item.discountedPrice = cartItemData.quantity * item.product.discountedPrice
        const newCartItem = item.save();
        return newCartItem;
    }
    return "userId is not matching with user._id";

  } catch (e) {
    throw new Error("eror while updating cartItem", e.message);
  }
};

const removeCartItem = async(userId, cartItemId) =>{
    const user = UserService.getUserByUserId(userId)
    const cartItem = findCartItemById(cartItemId)

    if(user?._id?.toString() == cartItem?.userId?.toString()){
        await CartItem.findByIdAndDelete(cartItemId)
    }
    else throw new Error('you cant delete cartItem')
    return cartItem
}

const findCartItemById = async(cartItemId) =>{
    try{
        const cartItem = await CartItem.findById(cartItemId).populate('product');
        return cartItem;
    }
    catch(e){
        throw new Error('eorror', e.message);
    }
}

module.exports = {findCartItemById, removeCartItem, updateCartItem}