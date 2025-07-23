const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
  Quantity: {
        type: Number,      
    price: {
        type: Number,
    },
    image: {
        type: String,
      },
    created_at: {
        type: Date,
        default: Date.now
    }
}
    }
})
const Product = mongoose.model('Product', productSchema);
module.exports = Product;