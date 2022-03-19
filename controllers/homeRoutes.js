/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const router = require('express').Router();
const { Category, menuItems, Cart } = require('../models');
const Apetizer = require('../models/Apetizer');
const withAuth = require('../utils/auth');

// route to get all apetizers
// router.get('/', async (req, res) => {
//     const apetizerData = await Apetizer.findAll().catch((err) => {
//         res.json(err);
//       });
//         const apetizers = apetizerData.map((apetizer) => apetizer.get({ plain: true }));
//         res.render('Apetizer', { apetizers });
//       });

// router.get('/category/:id', async (req, res) => {
//   try{
//     const apetizerData = await Apetizer.findAll()


//       const apetizers = apetizerData.map((apetizer) => apetizer.get({ plain: true }));
//       res.render('Apetizer', { apetizers });
//       console.log(apetizers)

//       // const apetizerData = await Apetizer.findByPk(req.params.id);
//       // if(!apetizerData) {
//       //     res.status(404).json({message: 'No apetizer with this id!'});
//       //     return;
//       // }
//       // const apetizer = apetizerData.get({ plain: true });
//       // res.render('apetizer', apetizer);
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

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

// GET one category
router.get('/category/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: menuItems,
          attributes: [
            'id',
            'name',
            'hasMeat',
            'price',
            'hasNuts',
            'filename',
            'description',
          ],
        },
      ],
    });

    const category = dbCategoryData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'category' template
    res.render('category', { category, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





//get one Apetizer
// router.get('/category/:id', async (req, res) => {
//   try {
//     const dbApetizerData = await Apetizer.findByPk(req.params.id, {
//       include: [
//         {
//           model: Apetizer,
//           attributes: [
//             'id',
//             'Apetizer_name',
//             'price',
//             'description',
//           ],
//         },
//       ],
//     });

//     const category = dbApetizerData.get({ plain: true });

//     res.render('category', { category, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // route to get menuItems
// router.get('/', async (req, res) => {
//   const menuItemData = await menuItems.findAll().catch((err) => {
//       res.json(err);
//     });
//       const menuItems = menuItemData.map((menuItem) => menuItem.get({ plain: true }));
//       res.render('menuItem', { menuItems });
//     });


//get one menuItem
router.get('/menuItem/:id', async (req, res) => {
  try {
    const dbmenuItemData = await menuItem.findByPk(req.params.id);

    const menuItem = dbmenuItemData.get({ plain: true });

    res.render('menuItem', { menuItem, loggedIn: req.session.loggedIn });
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
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// Cart route
router.get('/cart', async (req, res) => {
  const dbCartData = await Cart.findAll({
    include: [
      {
        model: menuItems,
        attributes: ['filename', 'description', 'price'],
      },
    ],
  });

  const cartItems = dbCartData.map((item) =>
    item.get({ plain: true })
  );

  console.log( {cartItems} );
  // Otherwise, render the 'cart' template
  res.render('cart', { cartItems, loggedIn: req.session.loggedIn });
});

module.exports = router;
