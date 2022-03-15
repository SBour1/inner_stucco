const router = require('express').Router();
require("dotenv").config();
const axios = require("axios").default;
let zip
const withAuth = require("../utils/auth");
// let zip = document.querySelector('zipcode').val();

var options = {
  method: "GET",
  url: `https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/19111/` + zip + `/mile`,
  headers: {
    "x-rapidapi-host": "redline-redline-zipcode.p.rapidapi.com",
    "x-rapidapi-key": process.env.API_KEY,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    let distance = data.result.distance;
    if (distance <= 10) {
        router.get('/order', withAuth , async (res, req) => {
            res.render(order)
        })
    } else {
        window.alert('Sorry! You are too far away for delivery! Redirecting to main page.')
        res.redirect('/')
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });

module.exports = router;