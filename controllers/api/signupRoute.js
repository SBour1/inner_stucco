const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const newUser = User({
        email: req.body.email,
        password: hash,
        username: req.body.username,
      });
      User.save().then((result) => {
        res.status(201).json({
          message: "Account Created",
          result: result,
        });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
