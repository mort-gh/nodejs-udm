const keys = require('../keys');

module.exports = function (email, token) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: 'Восстановление доступа (Node.js courses store)',
    html: `
    <h1>Вы забыли пароль?</h1>
    <p>Для восстановления доступа, пройдите по <a href="${keys.BASE_URL}/auth/password/${token}">ссылке</a></p>

    <br />
    <p>Если это письмо попало к вам ошибочно, проигнорируйте его.</p>

    <hr />
    <a href=${keys.BASE_URL}> Магазин курсов </a>
    `,
  };
};
