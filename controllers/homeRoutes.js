const router = require('express').Router();
const { Category, menuItems } = require('../models');
const Apetizer = require('../models/Apetizer');


// route to get all apetizers
// router.get('/', async (req, res) => {
//     const apetizerData = await Apetizer.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const apetizers = apetizerData.map((apetizer) => apetizer.get({ plain: true }));
//         res.render('Apetizer', { apetizers });
//       });

router.get('/category/:id', async (req, res) => {
  try{ 
    const apetizerData = await Apetizer.findAll()

  
      const apetizers = apetizerData.map((apetizer) => apetizer.get({ plain: true }));
      res.render('Apetizer', { apetizers });
      console.log(apetizers)
    
      // const apetizerData = await Apetizer.findByPk(req.params.id);
      // if(!apetizerData) {
      //     res.status(404).json({message: 'No apetizer with this id!'});
      //     return;
      // }
      // const apetizer = apetizerData.get({ plain: true });
      // res.render('apetizer', apetizer);
    } catch (err) {
        res.status(500).json(err);
    };     
});

// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: menuItems,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/category/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: menuItems,
          attributes: [
            'id',
            'name',
            'price',
            'filename',
            'description',
          ],
        },
      ],
    });

    const category = dbCategoryData.get({ plain: true });
   
    res.render('category', { category, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/menuItems/:id', async (req, res) => {
  try {
    const dbmenuItemsData = await menuItems.findByPk(req.params.id);

    const menuItems = dbmenuItemsData.get({ plain: true });

    res.render('menuItems', { menuItems, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});


// Show sign up page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }

  res.render('signup');
})


module.exports = router;