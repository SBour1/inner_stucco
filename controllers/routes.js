const router = require("express").Router();
const withAuth = require('../utils/helper')

router.get("/", withAuth, async (req, res) => {
    try {
        res.render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (res, req) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return
    }
    res.render('login')
});

module.exports = router;