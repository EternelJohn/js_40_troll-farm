const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const createTrolls = require('./middleware');

const app = express();
const publicPath = path.join(__dirname, 'web', 'views', 'public');

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './server/web/views');

app.use('/public', express.static(publicPath));

app.get('/', async function (req, res) {
	const trolls = await createTrolls();

	res.render('index.hbs', {layout: false, trolls});
});

app.listen(3000, 'localhost', (err) => {
	if (err) {
		console.log('something went wrong');
	} else {
		console.log('server is listening on port 3000: http://localhost:3000');
	}
});