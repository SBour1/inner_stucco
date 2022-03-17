const router = require('express').router();
// eslint-disable-next-line no-unused-vars
const { response } = require('express');
const { MenuItem } = require('../../models');

router.get('/menu', async (req, res) => {
  try {
    const menuData = await MenuItem.findAll({});

    const menu = menuData.map((items) => items.get({ plain: true }));

    res.render('menu', { menu });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/menu/:id', async (req, res) => {
  try {
    const item = await MenuItem.findByPk(req.params.id);

    if (!item) {
      res.status(404).json({ message: 'No item found' });
      return;
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json(error);
  }
});
//
module.exports = router;
