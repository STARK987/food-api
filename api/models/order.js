const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: [{ 
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'Product',
        required: true
    }],
    quantity: { type: Number, default: 1 },
    address: {type: String, required: true},
    contact: {type: Number, required: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;