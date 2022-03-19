/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const router = require('express').Router();
const { Category, menuItems, Cart } = require('../models');

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
    res.render('category', { category, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/menuItem/:id', async (req, res) => {
  try {
    const dbmenuItemData = await menuItems.findByPk(req.params.id);

    const menuItem = dbmenuItemData.get({ plain: true });

    res.render('menuItem', { menuItem, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

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
  res.render('cart', { cartItems, loggedIn: req.session.loggedIn });
});

module.exports = router;
