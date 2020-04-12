const { Router } = require('express');
const Course = require('../models/course');
const authMiddleware = require('../middleware/auth');
const router = Router();

router.get('/', authMiddleware, (req, res) => {
  res.render('add', {
    title: 'Добавить курс',
    isAdd: true,
  });
});

router.post('/', authMiddleware, async (req, res) => {
  const course = new Course({
    title: req.body.title,
    price: req.body.price,
    img: req.body.img,
    userId: req.user,
  });

  try {
    await course.save();
    res.redirect('/courses');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
