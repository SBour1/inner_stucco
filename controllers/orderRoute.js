const router = require('express').router();
require("dotenv").config();
const axios = require("axios").default;
let zip = document.querySelector('zipcode').val();

var options = {
  method: "GET",
  url: `https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/08057/` + zip + `/mile`,
  headers: {
    "x-rapidapi-host": "redline-redline-zipcode.p.rapidapi.com",
    "x-rapidapi-key": API_KEY,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    let distance = data.result.distance;
    if (distance <= 10) {
        router.get('/order', async (res, req) => {
            res.render(order)
        })
    } else {
        window.alert('Sorry! You are too far away for delivery! Redirecting to main page.')
        res.redirect('/')
    }
  })
  .catch(function (error) {
    res.status(500).json(error);
  });
