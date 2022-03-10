const router = require('express').router();

router.get('/', async (req,res) => {
    res.render('homepage'); 
    
}); // Homepage route

router.get('/about', async (req,res) => {
    res.render('about');

});

router.get('/menu', async (req,res) => {
    res.render('menu');
});

router.get('/order', async (req,res) => {
    res.render('order');
});

modeule.exports = router;