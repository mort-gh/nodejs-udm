const { body } = require('express-validator');
const User = require('../models/user');

exports.registerValidators = [
  body('email')
    .isEmail()
    .withMessage('Введите корректный email')
    .custom(async (value, req) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          return Promise.reject('Введенный email уже занят');
        }
      } catch (error) {
        console.log(error);
      }
    })
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6, max: 56 })
    .isAlphanumeric()
    .trim()
    .withMessage(
      'Некорректный пароль. Используйте только буквы и числа, длина пароля - не менее 6 символов'
    ),
  body('confirm')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Введенные пароли не совпадают');
      }
      return true;
    })
    .trim(),
  body('name')
    .isLength({ min: 3 })
    .withMessage('Некорректное имя пользователя. Минимальная длина: 3 символа')
    .trim(),
];

exports.courseValidators = [
  body('title')
    .isLength({ min: 3 })
    .withMessage('Минимальная длина названия курса: 3 символа')
    .trim(),
  body('price')
    .isNumeric()
    .withMessage('Цена курса введена не верно. Используйте только числа'),
  body('img')
    .isURL()
    .withMessage('Некоректное значение поля изображения. Введите прямой URL'),
];
