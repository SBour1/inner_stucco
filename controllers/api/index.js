const router = require("express").Router();
const cartRoute = require("./cartRoute");
const loginRoute = require("./loginRoute");
const menuRoute = require("./menuroute");
// const orderRoute = require("./orderRoute");
const signupRoute = require("./signupRoute");

router.use("/cart", cartRoute);
router.use("/login", loginRoute);
router.use("/menu", menuRoute);
// router.use("/order", orderRoute);
router.use("/signup", signupRoute);

module.exports = router;
