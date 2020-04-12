const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const homeRoutes = require('./routes/home');
const cardRoutes = require('./routes/card');
const addRoutes = require('./routes/add');
const ordersRoutes = require('./routes/orders');
const coursesRoutes = require('./routes/courses');
const authRoutes = require('./routes/auth');
const varMiddleware = require('./middleware/variables');
const userMiddleware = require('./middleware/user');

const app = express();

const MONGODB_URI =
  'mongodb+srv://mort:6EnU9s3987Rdx6CB@cluster0-5qlai.mongodb.net/shop';

const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI,
});

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(varMiddleware);
app.use(userMiddleware);

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);
app.use('/orders', ordersRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    await mongoose
      .connect(MONGODB_URI, options)
      .then(() => console.log('* * * DB connected * * * '));

    app.listen(PORT, () => {
      console.log(`* * * Server is running on port ${PORT} * * * `);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
