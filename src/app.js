const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
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
