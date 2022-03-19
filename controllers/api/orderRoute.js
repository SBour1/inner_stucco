const router = require('express').Router();
const { menuItems, Cart } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log('Request body', req.body);
    var orderData = await Cart.create(req.body);
    console.log(orderData);
    res.status(200).json(orderData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    var orderItems = await Cart.findAll({
      include: [{ model: menuItems }]
    });
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;