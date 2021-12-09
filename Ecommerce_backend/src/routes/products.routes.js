const { Router } = require ('express');
const router = Router();


const { getProducts, createProduct, getProduct, updateProduct, deleteProduct } = 
require('../controllers/product.controller');

router.route('/')

router.get('/',getProducts);
router.post('/',createProduct );

router.get('/:id',getProduct );
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router; 