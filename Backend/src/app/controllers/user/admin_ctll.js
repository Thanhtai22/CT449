
const Product = require('../../models/product');
const User = require('../../models/user');
const Cart = require('../../models/cart');

const addProduct = async(req, res, next) => {
    const {image, product_name, product_price, so_luong_nhap} = req.body;
    try {
        const newProduct = new Product({
            image: image,
            product_name: product_name,
            product_price: product_price,
            so_luong_nhap: so_luong_nhap,
            ton_kho: 0,
            so_luong_con_lai: so_luong_nhap,
        });
        await newProduct.save();
        console.log('Sản phẩm mới đã được thêm thành công');
      } catch (error) {
        console.error('Lỗi khi thêm sản phẩm mới:', error);
      }
}
const create = async(req, res, next) => {
    const {email,password,phone,city,address} = req.body;
    
    try {
        const newUser = new User({
            email: email,
            password:password , 
            phone: phone,
            city: city,
            address: address,
            
        })
        await newUser.save();
        console.log('Tạo tài khoản thành công');
      } catch (error) {
        console.error('Lỗi:', error);
      }
}

const deleteProduct = async(req, res, next) => {
    const {id} = req.query;
    Product.deleteOne({id: id})
        .then(() => console.log('đã xóa sản phẩm có id: ' + id))
        .catch(next);
}

const editProduct =async(req, res, next) => {
    const {id} = req.query;
    const {image, product_name, product_price, so_luong_con_lai, so_luong_nhap} = req.body;
    Product.updateOne({id: id}, {$set: {
        image: image,
        product_name: product_name,
        product_price: product_price,
        so_luong_con_lai: so_luong_con_lai,
        so_luong_nhap: so_luong_nhap
    }})
        .then(() => console.log('cập nhật thành công!!'))
        .catch(next);
}

const getorder = async(req, res, next) => {
    Cart.find({order: true})
        .populate('user')
        .populate('listProduct.product')
        .then(orders => res.json(orders))
        .catch(next);
}

const submitOrders = async(req, res, next) => {
    const {id} = req.query;
    Cart.updateOne({_id: id}, {$set: {
        status: 'Đang giao',
    }})
        .then(() => console.log('duyệt thành công'))
        .catch(next);
}
module.exports = {
    create,
    addProduct,
    deleteProduct,
    editProduct,
    getorder,
    submitOrders,
};