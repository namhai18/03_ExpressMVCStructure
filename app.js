const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

const app = express();
// app.set to set installed to express
// after install ejs template we set this engine to express
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
// set express where to find the views
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// parse body of request
app.use(bodyParser.urlencoded({ extended: false }));
// add css file vao app
app.use(express.static(path.join(__dirname, 'public')));

// add route dinh tuyen
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// add route dinh tuyen error with controllers
app.use(errorController.get404);

app.listen(3000);
