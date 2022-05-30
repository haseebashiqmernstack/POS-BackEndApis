const { Cart } = require('../controllers/cartController');

const router=require('express').Router();

router.post('/cart/addtocart',Cart.AddToCart);

module.exports=router;