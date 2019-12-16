const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define Paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
// const partialsPath = path.join(__dirname, '../templates/partials');

// setup handbars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'weather app',
    name: 'Michael Slocum'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Michael Slocum'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Michael Slocum'
  });
});
app.get('*', (req, res) => {
  res.send('404 page');
});

app.get('/weather', (req, res) => {
  res.send({
    forcast: 'test',
    location: 'test'
  });
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
