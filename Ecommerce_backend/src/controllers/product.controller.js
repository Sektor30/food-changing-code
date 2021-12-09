
const prodCtl = {};
const Product = require ('../models/Product');
// const uploadImage = require('../helpers/cloudinary');

prodCtl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

prodCtl.createProduct = async (req, res, next) => {
    try {
        const { name, price, description } = req.body;
        
        // const result = await uploadImage(req.files.image.tempFilePath);

        const newProduct = new Product({ name, price, description });

        await newProduct.save();
        res.json(newProduct);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

prodCtl.getProduct = async (req, res) => {
    const product= await Product.findById(req.params.id)
    res.json(req.body)
}

prodCtl.updateProduct = async (req, res) => {
    const{name, price,description}= req.body;
    await Product.findByIdAndUpdate(req.params.id, {name, price ,description})
    res.json('update product')
}

prodCtl.deleteProduct = async (req, res) => {
    const {id} = req.params;

    try {
        const productDeleted = await Product.findByIdAndDelete(id);
        if (productDeleted) return res.sendStatus(204);

        return res.sendStatus(404);
    } catch (error) {
        console.log(error);
        next(error);
    }
    res.json(req.body)
}







module.exports = prodCtl; 