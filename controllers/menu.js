const router = require('express').router(); 

router.get('/menu', (req,res) => {
    res.render('menuitems');
}) 

router.get('/menu/:id', (req,res) => {
    
})