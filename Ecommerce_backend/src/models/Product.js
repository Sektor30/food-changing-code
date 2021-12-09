const { Schema, model } = require ('mongoose');


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        url: String
    }
}, {
    timestamps: true,
    versionKey: false
});
    

module.exports = model('Product', ProductSchema);