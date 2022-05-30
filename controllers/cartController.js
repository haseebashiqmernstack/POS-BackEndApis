const Cart=require('../models/cart');

exports.Cart=Object.create({
AddToCart:async (req,res) =>{
    const {customer,orderNo}=req.body;
    // const cartitems=
    // console.log({
    //     customer,orderNo,cartitems
    // })
    const cart=new Cart({
        customer,
        orderNo,
        cartItems:req.body.cartItems.map(item=>{
            return {product:item.product,qty:item.qty,price:item.price}
   })
    });
    await cart.save((error,_order)=>{
              if(error) return res.status(400).json({msg:error.message})
              if(_order) return res.status(201).json({_order})
    })
}


})