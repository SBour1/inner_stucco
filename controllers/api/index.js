const router = require('express').Router();
const loginRoute = require('./loginRoute');
const menuRoute = require('./menuroute');
const orderRoute = require('./orderRoute');
const signupRoute = require('./signupRoute');

router.use('/login', loginRoute);
router.use('/menu', menuRoute);
router.use('/order', orderRoute);
router.use('/signup', signupRoute);

module.exports = router;
