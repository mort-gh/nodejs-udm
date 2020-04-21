module.exports = function (req, res, next) {
  res.status(404).render('404', {
    title: 'Упс! Что-то пошло не так... Страница не найдена',
  });
};
