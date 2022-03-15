const router = require('express').Router();
const { menuItems } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const menuData = await menuItems.findAll({});

    const menu = menuData.map((items) => items.get({ plain: true }));

    res.render('menu', { menu });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await menuItems.findByPk(req.params.id);

    if (!item) {
      res.status(404).json({ message: 'No item found' });
      return;
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
