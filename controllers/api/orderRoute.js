const router = require('express').Router();
const { menuItems, Cart } = require('../../models');
// const Order = require('../../models/Order');

router.post('/', async (req, res) => {
  try {
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

// const router = require('express').Router();
// require("dotenv").config();
// const axios = require("axios").default;
// let zip
// // let zip = document.querySelector('zipcode').val();

// var options = {
//   method: "GET",
//   url: `https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/19111/` + zip + `/mile`,
//   headers: {
//     "x-rapidapi-host": "redline-redline-zipcode.p.rapidapi.com",
//     "x-rapidapi-key": process.env.API_KEY,
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//     let distance = data.result.distance;
//     if (distance <= 10) {
//         router.get('/order', async (res, req) => {
//             res.render(order)
//         })
//     } else {
//         window.alert('Sorry! You are too far away for delivery! Redirecting to main page.')
//         res.redirect('/')
//     }
//   })
//   .catch(err => {
//     res.status(500).json(err);
//   });

// module.exports = router;
