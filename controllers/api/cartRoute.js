const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const cart = require('../db/cart')

var newItem = []

fs.readFile(path.join(__dirname,cart), 'utf8', (err,data) => {
    newItem = JSON.parse(data)
})

router.get('/cart', (req, res) => {
    res.json(newItem)
});


router.post('/cart', (req, res) =>{
    console.log(req.body)
    req.body.id = Math.floor((1+ Math.random())* 0x100000); 
    newItem.push(req.body);
  //Add it to db.cart. Then return updated cart to client.
    fs.writeFileSync(path.join(__dirname,cart), JSON.stringify(newItem));
    res.json(newItem);
    
});

router.delete('/cart/:id', (req, res) => {
    cart = [];
    for (let i = 0; i < cart.length; i++) {
        if (req.params.id != cart[i].id) {
            cart.push(cart[i])
        }
    }
    fs.writeFileSync(cart, JSON.stringify(cart));
    cart = cart;
    res.json(cart);
});


module.exports = router;